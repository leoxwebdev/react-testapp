var Amount = React.createClass({
    getInitialState: function() {
        return {
            value: ""
        };
    },

    changeHandler: function(event) {
        var oldValue = event.target.value.replace(/[^0-9\.]/g, "").split(".");

        var integerPart = oldValue[0];
        var floatPart = oldValue[1];

        var newValue = "";

        for (var i = 0; i < integerPart.length; i++) {
            newValue = integerPart[integerPart.length - 1 - i] + newValue;
            if ((i + 1) % 3 === 0 && i != integerPart.length - 1) {
                newValue = "," + newValue;
            }
        }

        if (floatPart !== undefined) {
            newValue += ".";
            for (i = 0; i < floatPart.length && i < 2; i++) { // 2 digits after dot
                newValue += floatPart[i];
            }
        }

        this.setState({value: newValue});
    },

    render: function() {
        return (
            <input type="text" className="form-control" placeholder="Amount"
                   value={this.state.value} onChange={this.changeHandler} required />
        );
    }
});