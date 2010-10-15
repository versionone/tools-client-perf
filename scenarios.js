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
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Goals',
	parameters: {
		menu: 'GoalsPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Goal Assignment',
	parameters: {
		menu: 'GoalAssignmentPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Themes',
	parameters: {
		menu: 'ThemeAssignmentPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Epics',
	parameters: {
		menu: 'EpicsPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Requests',
	parameters: {
		menu: 'RequestsPlanningPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Issues',
	parameters: {
		menu: 'IssuesProductPlanningPage'
	},
	verifyScope: bigProject
})

scenario({
	name: 'Product Planning / Templates',
	parameters: {
		menu: 'TemplatesPage'
	},
	verifyScope: bigProject
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
	},
	verifyScope: projectWithSchedule
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
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Release Planning / Team Scheduling',
	parameters: {
		menu: 'TeamAssignmentPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Planning / Iteration Scheduling',
	parameters: {
		menu: 'IterationSchedulingPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Planning / Detail Planning',
	parameters: {
		menu: 'DetailPlanningPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Planning / Member Planning',
	parameters: {
		menu: 'MemberPlanningPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Planning / Issues',
	parameters: {
		menu: 'IssuesIterationPlanningPage'
	},
	verifyScope: projectWithSchedule
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
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Tracking / Storyboard',
	parameters: {
		menu: 'StoryBoardPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Tracking / Taskboard',
	parameters: {
		menu: 'TaskBoardPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Tracking / Testboard',
	parameters: {
		menu: 'TestBoardPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Tracking / Member Tracking',
	parameters: {
		menu: 'MemberTrackingPage'
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Iteration Tracking / Issues',
	parameters: {
		menu: 'IterationTrackingIssuesPage'
	},
	verifyScope: projectWithSchedule
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
	},
	verifyScope: projectWithSchedule
})

scenario({
	name: 'Reports / Project Scope Change',
	parameters: {
		menu: 'ProjectScopeChangePage'
	},
	verifyScope: projectWithSchedule,
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
	verifyScope: projectWithSchedule,
	onload: function($) { 
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Velocity',
	parameters: {
		menu: 'TotalVelocityPage'
	},
	verifyScope: projectWithSchedule,
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Estimate Trend',
	parameters: {
		menu: 'EstimateTrendPage'
	},
	verifyScope: projectWithSchedule,
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Parking Lot',
	parameters: {
		menu: 'ThemeDashboardPage'
	},
	verifyScope: projectWithSchedule,
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Project/Release Roadmap',
	parameters: {
		menu: 'ProjectRoadmapPage'
	},
	verifyScope: projectWithSchedule,
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Theme Roadmap',
	parameters: {
		menu: 'ThemeRoadmapPage'
	},
	verifyScope: projectWithSchedule,
	onload: function($, V1) {
		$('.FilterButtons .submit').click()
	}
})

scenario({
	name: 'Reports / Defect Priority Trend',
	parameters: {
		menu: 'DefectPriorityTrendPage'
	},
	verifyScope: projectWithSchedule,
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
	verifyScope: bigProject,
	onload: function($, V1, end) {
		Aspect(V1.Gadgets.ContextTree, 'Initialize').after(end)
		V1.Html.Event.Fire($('.ScopeContext .DropDown')[0], 'click')
	}
})


