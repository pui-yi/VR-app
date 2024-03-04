AFRAME.registerComponent('rotate', {
    init: function() {
        let el = this.el;
        this.rotate = function(e) {
            let params = {
                property: 'rotation',
                to: {
                    x: 0,
                    y: 360,
                    z: 0
                },
                dur: 6000,
                easing: 'linear',
                loop:true
            };
            el.setAttribute('animation', params);
        }
        this.el.addEventListener('click', this.rotate)
    },
    remove: function() {
        this.el.removeEventListener('click', this.rotate);
    }
});