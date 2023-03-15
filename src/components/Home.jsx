
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";

import Jokes from './Jokes'
import Loading from './Loading'


const Home = () => {


    const [jokes, setJoke] = useState([]);
    const [loading, setLoading] = useState(true);

    const refresh = () => window.location.reload(true)


    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const { data } = await axios.get(
                    `${server}`
                );
                setJoke(data.jokes);
                setLoading(false);


            } catch (error) {
                // console.log(error);
            }
        };
        fetchJokes();
    }, []);

    return (
        <div className='home'>

            {loading ? <Loading /> :

                jokes.map((i, key) => (

                    < Jokes
                        key={key}
                        setup={i.setup}
                        delivery={i.delivery}

                    />


                ))

            }
            <button className="btn" onClick={refresh}>Get More Jokes</button>




        </div >
    )
}

export default Home