import React from 'react';
import {useRouter} from "next/router";
import {Navbar} from "../components/Header/Header";

const Activity = ({ name }) => {
    const router = useRouter()


    const func = () => {
        router.replace({
            pathname: '/activity',
            query: {name: 'folk'}
            }, undefined, {shallow: true}
        );
    }

    return (
        <>
            <Navbar path={'/activity'}/>
            <h1>{name}</h1>
            <button
                onClick={func}
            >
                click
            </button>
            {
                router.query.name &&
                    <h1>{router.query.name}</h1>
            }
        </>
    );
}

Activity.getInitialProps = async ({req, res}) => {


    return  {
        initialProps: {
            name: 'folk',
            user: {
                username: 'folkmoz',
                firstName: 'Jirantanapat'
            }
        }
    }
}

export default Activity;
