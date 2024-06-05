// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

	// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
	const scroll = document.documentElement.scrollTop;
	if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
	} else {
	document.querySelector('body').classList.remove('scroll')
	}
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
	for (const item of dropDowns) {
		const onClick = () => {
		item.classList.toggle('cs-active')
	}
	item.addEventListener('click', onClick)
	}

	const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

        class FAQFilter {
        filtersSelector = '.cs-option'
        FAQselector = '.cs-faq-group'
        activeClass = 'cs-active'
        hiddenClass = 'cs-hidden'

        constructor() {
            const $filters = document.querySelectorAll(this.filtersSelector)
            this.$activeFilter = $filters[0]
            this.$images = document.querySelectorAll(this.FAQselector)

            this.$activeFilter.classList.add(this.activeClass)

            for (const $filter of $filters) {
            $filter.addEventListener('click', () => this.onClick($filter))
            }
        }

        onClick($filter) {
            this.filter($filter.dataset.filter)

            const { activeClass } = this

            this.$activeFilter.classList.remove(activeClass)
            $filter.classList.add(activeClass)

            this.$activeFilter = $filter
        }

        filter(filter) {
            const showAll = filter == 'all'
            const { hiddenClass } = this

            for (const $image of this.$images) {
            const show = showAll || $image.dataset.category == filter
            $image.classList.toggle(hiddenClass, !show)
            }
        }
        }

        new FAQFilter()
                                
							
        // Get the modal, close button, and submit button elements
    var CSmodal = document.getElementById('cs-modal-1605');
    var CScloseButton = document.getElementById('cs-close-1605');
    var CSsubmitButton = document.getElementById('cs-submit-1605');

    // your local storage reset for local testing. uncomment this command so you can still access you pop up after clicking the close or submit button.
    // localStorage.setItem('closed', 'false');

    // Function to add 'cs-close' class, update the z-index, and update localStorage
    function handleClose() {
        CSmodal.classList.add('cs-close');
        CSmodal.style.zIndex = '-100'; // Set z-index to -100 when closing
        localStorage.setItem('closed', 'true');
    }

    // Attach event listeners to the close and submit buttons
    CScloseButton.addEventListener('click', handleClose);
    // if you remove the form, remove this below or you will get an error
    CSsubmitButton.addEventListener('click', handleClose);

    // Function to check localStorage and apply class and style if needed, this prevents the pop up from popping up again if you already submitted your email or closed the pop up. Becuase persistant pop ups are annoying
    function checkLocalStorage() {
    var isClosed = localStorage.getItem('closed') === 'true';
    if (isClosed) {
        CSmodal.classList.add('cs-closed');
        CSmodal.style.zIndex = '-100'; // Set z-index to -100 if closed
        } else {
            CSmodal.style.zIndex = '1000'; // Set z-index to 1000 if not closed
        }
    }