document.addEventListener("DOMContentLoaded", function(event) {
    const accordion = function() {
        let currentId;
    
        function addEventClickToButton() {
            let accordion = document.querySelectorAll("#accordion button");
            accordion.forEach( button =>{
                button.onclick = eventHandlerOnClick;
            });
        }
        
        function eventHandlerOnClick() {
            let id = this.id;
            currentId = id;
            buildContent(id);
            addActiveClass(id);
        }
        
        function buildContent(type = currentId) {
            let contentEl = buildContentElement(type);
            switch(type) {
                case 'fit-guide':
                    contentEl.innerHTML =
                    `<div>
                        <p style="margin-top: 2rem;">
                            Integer vel arcu ac dolor tincidunt dapibus. Nam sit amet lacinia velit. Pellentesque vel urna diam. Nunc sit amet justo malesuada, tincidunt massa eu, placerat est. Suspendisse commodo pellentesque gravida. Donec suscipit vulputate odio, at eleifend purus condimentum in. Praesent sed cursus sem. Donec mattis urna efficitur diam sagittis, id maximus orci dictum. Etiam non congue felis, et varius augue. Aliquam et ullamcorper massa. Nullam interdum lobortis volutpat. Etiam leo arcu, vulputate vel commodo sit amet, ullamcorper varius dui.
                        </p>
                    </div>`;
                    break;
                case 'care':
                    contentEl.innerHTML =
                    `<div>
                        <p style="margin-top: 2rem;">
                            Quisque a turpis fermentum, dapibus mauris quis, dignissim ligula. Aliquam aliquet tellus nunc, non fermentum leo dictum vel. Morbi vehicula laoreet felis ac blandit. Sed mi urna, feugiat nec rhoncus vitae, sollicitudin non dui. Vestibulum in porttitor urna, ut posuere elit. Suspendisse mi magna, molestie nec aliquam id, porttitor in ante. Nullam posuere ipsum odio, at placerat ante eleifend vitae. Suspendisse vestibulum 
                            magna pretium velit venenatis venenatis. Donec dapibus, justo ut aliquam varius, quam tortor dignissim tellus, imperdiet scelerisque risus ex ac magna. Nunc sed purus nibh. Phasellus elit erat, scelerisque sed volutpat 
                            non, interdum vitae urna.
                        </p>
                    </div>`;
                    break;
                case 'materials':
                    contentEl.innerHTML = 
                    `<div>
                        <div class="flex"> 
                            <div class="cell">
                                <p class="percent-title">50%</p>
                                <p class="item-name">cashmere</p>
                            </div>
                            <div class="cell">
                                <p class="percent-title">46%</p>
                                <p class="item-name underline">wool</p>
                            </div>
                            <div class="cell">
                                <p class="percent-title">4%</p>
                                <p class="item-name">modal</p>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh arcu, ultricies nec purus quis, consequat luctus orci. Sed non mi nisi. Donec vulputate erat odio, eget lacinia lectus accumsan sed. Phasellus diam lorem, ullamcorper quis velit a, ultricies facilisis turpis. Sed laoreet efficitur odio, ut consequat arcu iaculis non. 
                        Quisque lectus ligula, venenatis quis ullamcorper vitae, euismod in nisi. Sed sed arcu tortor. Phasellus a iaculis metus, sed suscipit dui. Nunc mollis, ipsum at tristique dignissim, enim mi sodales nulla, sed dapibus lorem 
                        tortor et nisi.
                        </p>
                    </div>`;
                    break;
                default:
                    contentEl.innerHTML = '';
                    break;
            }
        }
        
        function addActiveClass(id) {
            // remove previous active button
            removeButtonActiveClass();
            // add active class to current click button
            let element = document.getElementById(id);
            element.className = 'active';
        }
        
        function removeButtonActiveClass() {
            let accordion = document.querySelectorAll("#accordion button");
            accordion.forEach( button =>{
               if(button.className === 'active') {
                   button.classList.remove('active');
               }
            });
        }
        
        function buildContentCurrentId() {
            buildContent()
        }
        
        function buildContentElement(id) {
            removeElementById('content');
            let width = window.innerWidth;
            let contentEl = document.createElement('div');
            contentEl.setAttribute('id','content');
            if(width >= 767) {
                let accordion = document.getElementById('accordion');
                accordion.after(contentEl);
            } else {
                if(id) {
                    let button = document.getElementById(id);
                    button.after(contentEl);
                }
            }
            return contentEl;
        }
        
        function removeElementById(id) {
            let element = document.getElementById(id);
            if(element) {
                element.remove()
            }
        }
        
        return { addEventClickToButton, buildContentCurrentId }
    }();
    
    accordion.addEventClickToButton();
    window.onresize = accordion.buildContentCurrentId;
});