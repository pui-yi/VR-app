AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        this.toggleColor = function() {
            el.setAttribute('color', '#FFE87C');
        }
        this.el.addEventListener('click', this.toggleColor);
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleColor);
    }
})