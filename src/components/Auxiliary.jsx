import React, { Component } from 'react';
import { connect } from "react-redux";
class Auxiliary extends Component {
    render() {
        const { auxiliary } = this.props;
        return (
            <div>
                <h2>Auxiliares</h2>
                <div className="main">
                    {
                        auxiliary.map(p => (
                            <article className="alternates" key={p.id}>
                                <div>
                                    <img src={p.foto} alt={p.nombre} />
                                    <button>X</button>
                                </div>
                                <p>{p.nombre}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ auxiliary: state.auxiliary })

const mapDispatchToProps = dispatch => ({
    deleteAlternate(p) {
        dispatch({
            type: "DELETE_ALTERNATE",
            player: p
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auxiliary);
