if (typeof ticket==='undefined' || !ticket.replace(/[ \t\?]/g, '')) {
	alert("Need ticket to be specified in parameters.js")
	throw "Need ticket to be specified in parameters.js"
}

setup({
	name: "Initialize and Login",
	parameters: {
		ticket: ticket,
		PrimaryScopeContext: bigProject,
		menu: 'MyHomeEnterpriseGettingStartedPage'
	}
})

scenario({
	name: 'Product Planning / Backlog',
	parameters: {
		menu: 'PrimaryBacklogPage'
	}
})

scenario({
	name: 'Product Planning / Goals',
	parameters: {
		menu: 'GoalsPage'
	}
})

scenario({
	name: 'Product Planning / Goal Assignment',
	parameters: {
		menu: 'GoalAssignmentPage'
	}
})

scenario({
	name: 'Product Planning / Themes',
	parameters: {
		menu: 'ThemeAssignmentPage'
	}
})

scenario({
	name: 'Product Planning / Epics',
	parameters: {
		menu: 'EpicsPage'
	}
})

scenario({
	name: 'Product Planning / Requests',
	parameters: {
		menu: 'RequestsPlanningPage'
	}
})

scenario({
	name: 'Product Planning / Issues',
	parameters: {
		menu: 'IssuesProductPlanningPage'
	}
})

scenario({
	name: 'Product Planning / Templates',
	parameters: {
		menu: 'TemplatesPage'
	}
})

setup({
	name: 'Release Planning / Release Scheduling (Change Scope)',
	parameters: {
		menu: 'ReleaseSchedulingPage',
		PrimaryScopeContext: projectWithSchedule
	}
})

scenario({
	name: 'Release Planning / Release Scheduling',
	parameters: {
		menu: 'ReleaseSchedulingPage'
	}
})

setup({
	name: 'Release Planning / Release Forecast (Reset Defaults)',
	url: 'ui.v1',
	parameters: {
		gadget: '/Widgets/Containers/Planning/ReleasePlanning/ReleaseForecastingResults/Gadget',
		ChangeEntities: '{ReleaseForecast:{Type:"ReleaseForecast",Reset:true}}'
	}
})

scenario({
	name: 'Release Planning / Release Forecasting',
	parameters: {
		menu: 'ReleaseForecastingPage'
	}
})

scenario({
	name: 'Release Planning / Team Scheduling',
	parameters: {
		menu: 'TeamAssignmentPage'
	}
})

scenario({
	name: 'Iteration Planning / Iteration Scheduling',
	parameters: {
		menu: 'IterationSchedulingPage'
	}
})

scenario({
	name: 'Iteration Planning / Detail Planning',
	parameters: {
		menu: 'DetailPlanningPage'
	}
})

scenario({
	name: 'Iteration Planning / Member Planning',
	parameters: {
		menu: 'MemberPlanningPage'
	}
})

scenario({
	name: 'Iteration Planning / Issues',
	parameters: {
		menu: 'IssuesIterationPlanningPage'
	}
})

setup({
	name: 'Change Iteration Filter',
	parameters: {
		menu: 'DetailTrackingPage'
	},
	onload : function($, V1) {
		V1.Html.Event.Fire($("select[_v1_updater='Planning/IterationCommon/Filter/Iteration']").val(sprint)[0] ,"change")
	}
})

scenario({
	name: 'Iteration Tracking / Detail Tracking',
	parameters: {
		menu: 'DetailTrackingPage'
	}
})

scenario({
	name: 'Iteration Tracking / Storyboard',
	parameters: {
		menu: 'StoryBoardPage'
	}
})

scenario({
	name: 'Iteration Tracking / Taskboard',
	parameters: {
		menu: 'TaskBoardPage'
	}
})

scenario({
	name: 'Iteration Tracking / Testboard',
	parameters: {
		menu: 'TestBoardPage'
	}
})

scenario({
	name: 'Iteration Tracking / Member Tracking',
	parameters: {
		menu: 'MemberTrackingPage'
	}
})

scenario({
	name: 'Iteration Tracking / Issues',
	parameters: {
		menu: 'IterationTrackingIssuesPage'
	}
})

scenario({
	name: 'Standup Dashboard',
	parameters: {
		menu: 'StandupDashboardPopupPage'
	}
})

scenario({
	name: 'Reports / Project Summary',
	parameters: {
		menu: 'ProjectSummaryPage'
	}
})

scenario({
	name: 'Reports / Project Scope Change',
	parameters: {
		menu: 'ProjectScopeChangePage'
	},
	onload: function($, V1) {
		V1.Html.Event.Fire($('input.datepicker[_v1_updater*=StartDate]').val(scopeChangeBegin)[0] ,"change")
		V1.Html.Event.Fire($('input.datepicker[_v1_updater*=EndDate]').val(scopeChangeEnd)[0] ,"change")
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Project Burndown',
	parameters: {
		menu: 'EstimateBurndownPage'
	},
	onload: function($) { 
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Velocity',
	parameters: {
		menu: 'TotalVelocityPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Estimate Trend',
	parameters: {
		menu: 'EstimateTrendPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Parking Lot',
	parameters: {
		menu: 'ThemeDashboardPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Project/Release Roadmap',
	parameters: {
		menu: 'ProjectRoadmapPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Theme Roadmap',
	parameters: {
		menu: 'ThemeRoadmapPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

//scenario({
//	name: 'Reports / Test Trend',
//	parameters: {
//		menu: 'TestTrendPage'
//	},
//	onload: function($, V1) {
//		$('.FilterButtons .FilterGoButton .submit').click()
//	}
//})

scenario({
	name: 'Reports / Defect Priority Trend',
	parameters: {
		menu: 'DefectPriorityTrendPage'
	},
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Expand Project Tree',
	parameters: {
		menu: 'PrimaryBacklogPage',
		PrimaryScopeContext: bigProject
	},
	onload: function($, V1, end) {
		Aspect(V1.Gadgets.ContextTree, 'Initialize').after(end)
		V1.Html.Event.Fire($('.ScopeContext .DropDown')[0], 'click')
	}
})


