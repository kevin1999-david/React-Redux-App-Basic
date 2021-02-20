import React from "react";
import { connect } from "react-redux";
const Alternates = ({ alternates, deleteAlternate }) => (
    <section>
        <h2>Alternates</h2>
        <div className="main">
            {
                alternates.map(p => (
                    <article className="alternates" key={p.id}>
                        <div>
                            <img src={p.foto} alt={p.nombre} />
                            <button onClick={() => deleteAlternate(p)}>X</button>
                        </div>
                        <p>{p.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({ alternates: state.alternates })

const mapDispatchToProps = dispatch => ({
    deleteAlternate(p) {
        dispatch({
            type: "DELETE_ALTERNATE",
            player: p
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Alternates);