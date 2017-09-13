function Button (text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        });
        $('body').append(this.$element);
    }
};


var button1 = new Button('Created button!');
button1.create();
var button2 = new Button('Created 2 button!');
button2.create();