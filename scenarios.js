if (typeof ticket==='undefined' || !ticket.replace(/[ \t\?]/g, '')) {
	alert("Need ticket to be specified in parameters.js")
	throw "Need ticket to be specified in parameters.js"
}

setup({
	name: "Initialize and Login",
	parameters: {
		ticket: ticket,
		PrimaryScopeContext: bigProject,
		menu: 'PrimaryBacklogPage'
	}
})

setup({
	name: "Turn Left-Nav off",
	url: 'ui.v1',
	parameters: {
		gadget: 'Gadgets/CollapsibleLeftNav',
		Changes: '{Show:"False"}'
	}
})

$.each(pageSizes, function(i, pageSize) {

	setup({
		name: "Set Page Size = " + pageSize,
		url: 'ui.v1',
		parameters: {
			GadgetType: 'GridCustomize',
			gadget: '/Widgets/Lists/Planning/WorkitemPlanning/TaskTestList',
			GridCustomize: '{PageSize:' + pageSize + '}'
		}
	})

	scenario({
		name: 'Backlog Planning / ' + pageSize + ' rows',
		parameters: {
			menu: 'PrimaryBacklogPage'
		},
		verifyScope: bigProject
	})

})
