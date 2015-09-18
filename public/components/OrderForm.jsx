var OrderForm = React.createClass({
    submitHandler: function() {
        var amount = this.refs.amount.getDOMNode().value;
        var phone = this.refs.phone.getDOMNode().value;

        $.post("/submit-order", {amount: amount, phone: phone}, function() {
            alert("Purchased");
            location.reload();
        });
    },

    render: function() {
        return (
            <div className="container">
                <form className="col-md-4 col-md-offset-4">

                    <h2>Fill the form: </h2>

                    <div className="form-group">
                        <Amount ref="amount"/>
                    </div>

                    <div className="form-group">
                        <Phone ref="phone"/>
                    </div>

                    <div className="form-group">
                        <input type="button" className="btn btn-lg btn-primary btn-block"
                               value="Submit" onClick={this.submitHandler} />
                    </div>
                </form>
            </div>
        );
    }
});

React.render(<OrderForm />, document.body);