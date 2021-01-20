import Layout from '../src/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getMovie } from '../src/redux/action/movieAction';
import loadable from '@loadable/component';
import Link from 'next/link';
const MovieCard = loadable(() => import('../src/components/MovieCard/MovieCard'));



export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies');
  const todos = await res.json()
  return {
    props: {
      todos
    }
  }
}

interface Props {
  searchValue: string
  todos: Array<any>
  dispatch: any
  movieList: Array<any>
}

const Home = (props: Props) => {
  let title: Array<any>;
  title = props.todos.filter(res => {
    let result = res.showTime.toString().toLowerCase().includes(props.searchValue.toLowerCase()) || res.title.toLowerCase().includes(props.searchValue.toLowerCase());
    return result
  });

  title.length = 100;
  useEffect(() => {
    props.dispatch(getMovie())
  }, [])
  return (
    <>
      <Layout>
        <Head>
          <title>This is Home Page</title>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <div className={`container`}>
          <div className="row mt-2">
            {
              title.map((res, i) => {
                return (
                  <div key={i + 1} className="col-md-4 mt-3">
                    <Link href={`/movies/detail/${res.id}`}>
                      <a>
                        <MovieCard
                          title={res.title}
                          image={res.image}
                          like={res.like}
                          showtime={res.showTime}
                        />
                      </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    searchValue: state.searchReducer.value,
    movieList: state.movieReducers.data,
  };
};
export default connect(mapStateToProps)(Home)
