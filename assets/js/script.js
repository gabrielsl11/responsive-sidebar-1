document.getElementById('toggle_btn').addEventListener('click', function () {
    var hiddenElements = document.querySelectorAll('.hidden-element, .visible-element');
    hiddenElements.forEach(function(element) {
        if (element.classList.contains('hidden-element')) {
            element.classList.remove('hidden-element');
            element.classList.add('visible-element');
        } else {
            element.classList.remove('visible-element');
            element.classList.add('hidden-element');
        }
    });
    
    var toggleIcon = this.querySelector('i');
    if (toggleIcon.classList.contains('fa-chevron-right')) {
        toggleIcon.classList.remove('fa-chevron-right');
        toggleIcon.classList.add('fa-chevron-left');
    } else {
        toggleIcon.classList.remove('fa-chevron-left');
        toggleIcon.classList.add('fa-chevron-right');
    }
});