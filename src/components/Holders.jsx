import React from "react";
import { connect } from "react-redux";
const Holders = ({ holders, deleteHolder }) => (
    <section>
        <h2>Holders</h2>
        <div className="main">
            {
                holders.map(p => (
                    <article className="holder" key={p.id}>
                        <div>
                            <img src={p.foto} alt={p.nombre} />
                            <button onClick={() => deleteHolder(p)}>X</button>
                        </div>
                        <p>{p.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({ holders: state.holders })

const mapDispatchToProps = dispatch => ({
    deleteHolder(p) {
        dispatch({
            type: "DELETE_HOLDER",
            player: p
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Holders);