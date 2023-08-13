import useFetch from "../../hooks/useFetch";
import "./featured.css"

const Featured = () => {

  const { data, loading, error } =useFetch("/hotels/countByCity?cities=bangalore,pune,hyderabad,chennai");
  
  return (
    <div className="featured">
     { loading ? (
     "Loading please wait"
     ) : (
     <><div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&amp;o"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bangalore</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&amp;o"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pune</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2THMU5H5DP4W4m9GEhCiXyUy3s-8a2wdNhA&amp;usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>{data[3]} properties</h2>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Featured
