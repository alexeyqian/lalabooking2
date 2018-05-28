public async Task InitializeFields(Category category = null, 
	FieldDataGroup selectedFieldDataGroup = null, bool isAbilityToAddTemplate = false)
{
    Stopwatch watch = Stopwatch.StartNew ();

	LoggingService.LogDebugMsg("Init DataEntry ");

	_isAbilityToAddTemplate = isAbilityToAddTemplate;

	if (category != null)
	{
		_myCategory = category;
		_abilityToAdd = category.AbilityToAdd;
		SelectedFieldDataGroup = selectedFieldDataGroup;
		if (SelectedFieldDataGroup == null && isAbilityToAddTemplate)
		{
			SelectedFieldDataGroup =
				await _fieldDataService.CreateNewFieldDataGroupAsync(Context.SelectedSiteVisit.AssessmentId,
					category);
		}

		if (SelectedFieldDataGroup != null)
		{
			var fieldDataGroups = await _fieldDataService.GetFieldDataGroupsAsync(Context.SelectedSiteVisit.AssessmentId, category);
			var updatedFieldDataGroup =
				fieldDataGroups.FirstOrDefault(
					f =>
					f.DisplayName == SelectedFieldDataGroup.DisplayName &&
					f.BindingID == SelectedFieldDataGroup.BindingID);
			if (updatedFieldDataGroup != null)
			{
				SelectedFieldDataGroup = updatedFieldDataGroup;
			}
		}

		if (category.Fields == null) // still more levels to go...
		{
			SubCategories = category.SubCategories.ToList();
			ShowAbilityToAddFields = false;
		}
		else // we've reached the bottom of the tree!
		{
			SubCategories = new List<Category>()
			{
				category
			};

			ShowAbilityToAddFields = true;
		}

	}
	else if (Context.SelectedTab.SubCategories != null && Context.SelectedTab.SubCategories.Count > 0)
	{
		SubCategories = Context.SelectedTab.SubCategories.ToList();
	}

	_controls = new List<BaseControlViewModel>();
	foreach (var cat in SubCategories.OrderBy(o => o.Order))
	{
		var header = _factory.GetControlForCategory(cat, _isAbilityToAddTemplate, this);
		_controls.Add(header);
		if (!cat.AbilityToAdd || _isAbilityToAddTemplate)
		{
			// create a subset list of "visible" categories, solely for UI
			foreach (var field in cat.Fields.OrderBy(f => f.Order))
			{
				bool addField = await ShouldShowField(field);

				if (addField)
				{
					FieldData fieldData = await GetFieldData(field);
					var vm = await _factory.GetControlForField(field, fieldData, this);
					_controls.Add(vm);
				}

				await SaveInvisibleFieldMeasureConfigGuid(field);
			}
		}
		else
		{
			List<FieldDataGroup> fieldDataGroups = await _fieldDataService.GetFieldDataGroupsAsync(Context.SelectedSiteVisit.AssessmentId, cat);
			if (fieldDataGroups != null && fieldDataGroups.Count > 0)
			{
				foreach (var fieldDataGroup in fieldDataGroups)
				{
					var vm = await _factory.GetControlForFieldDataGroup(cat, fieldDataGroup, this);
					_controls.Add(vm);
				}
			}
		}
	}
	RefreshSelectedNavItem();
	RefreshList(VisibleControls, _controls);

    Debug.WriteLine ("Initialize all fields took {0}ms", watch.ElapsedMilliseconds);
}