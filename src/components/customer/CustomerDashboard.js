import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import { Banner, Navbar, Slider } from "../ui/Common";
import loaderImage from "../../loader.gif";

function CustomerDashboard() {
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let { data } = get();
    data
      .then((item) => {
        setLoading(false)
        setCustomerData(item.data.customer)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    {loading && <img style={{marginLeft:"15%",marginTop:"5%"}} src={loaderImage} alt="Loading...."/>}
    {!loading && 
      <div>
      <Navbar />
      <Banner />
      <Slider datas={customerData?.originals} title="HollyWood" large="true" />
      <Slider
        datas={customerData?.trendingnow}
        title="Regional"
        large="false"
      />
      <Slider datas={customerData?.toprated} title="Series" large="false" />
      <Slider
        datas={customerData?.action}
        title="Music"
        large="false"
      />
      <Slider
        datas={customerData?.comedy}
        title="Sports"
        large="false"
      />
    </div>
    }
    </div>
  );
}

export default CustomerDashboard;
