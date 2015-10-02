var Phone = React.createClass({
    getInitialState: function() {
        return {
            value: ""
        }
    },

    changeHandler: function(event) {
        var enteredValue = event.target.value.replace(/\D/g, "");

        /* (917)345-5334 */
        var newValue = "";

        for (var i = 0; i < enteredValue.length && i < 10; i++) { // 10 = phone length
            switch (i) {
                case 0:
                    newValue = "(" + enteredValue[i];
                    break;
                case 3:
                    newValue += ")" + enteredValue[i];
                    break;
                case 6:
                    newValue += "-" + enteredValue[i];
                    break;
                default :
                    newValue += enteredValue[i]
            }
        }

        this.setState({value: newValue});
    },

    render: function() {
        return (
            <input type="text" className="form-control" placeholder="Phone number"
                   value={this.state.value} onChange={this.changeHandler} required />
        );
    }
});