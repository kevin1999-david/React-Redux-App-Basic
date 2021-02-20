import React from "react";
import { connect } from "react-redux";


const Players = ({ players, addHolder, addAlternate }) => (
    <section>

        <h2>Players</h2>
        <div className="container-players">
            {
                players.map(p => (
                    <article className="player" key={p.id}>
                        <img src={p.foto} alt={p.nombre} />
                        <h3>{p.nombre}</h3>
                        <div>
                            <button onClick={() => addHolder(p)}>Set as Holder</button>
                            <button onClick={() => addAlternate(p)}>Set as Alternate</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({ players: state.players })

const mapDispatchToProps = dispatch => ({
    addHolder(p) {
        dispatch({
            type: "ADD_HOLDER",
            player: p
        })
    },

    addAlternate(p) {
        dispatch({
            type: "ADD_ALTERNATE",
            player: p
        })
    }

})


//Funcion connect: Componentes de orden superior
export default connect(mapStateToProps, mapDispatchToProps)(Players);