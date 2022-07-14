function runPlugin() {
    let selectedElements = figma.currentPage.selection;
    let elementWidth;
    let groupedElements;

    
    
    if(selectedElements.length === 0){
        figma.closePlugin('No element selected!');
        return
        } else {
            for (let i = 0; i < selectedElements.length; i++) {
                if(selectedElements[i].type === 'GROUP') {
                    groupedElements = selectedElements[i].children
                    for(let i=0; i < groupedElements.length; i++){
                        elementWidth = groupedElements[i].width
                        groupedElements[i].cornerRadius = .055 * elementWidth;
                    }
                } else {
                elementWidth = selectedElements[i].width
                selectedElements[i].cornerRadius = .055 * elementWidth;  
            }
            figma.closePlugin('Added rounded corners to ' + selectedElements.length + ' elements')
        }
    }



    figma.closePlugin()
}
runPlugin();

