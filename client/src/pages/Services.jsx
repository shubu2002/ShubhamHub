import { useAuth } from "../store/auth";
export const Services = () => {

  const { serviceData } = useAuth();


  return (
    <>
      <div className="grid m-4 sm:grid-cols-3 gap-4 max-w-[1920px] mx-auto ">
        {
          serviceData.map((curElem , index) => {

            const  {price , description , provider ,service } = curElem ;
            return (
            

            <div className="min-h-[300px]  sm:min-h-[500px] rounded-lg border-white border-2 grid box transition-all bg-cyan-900 place-items-center text-purple-400" key={index}>

              <div className="card-image rounded-lg">
                <img className="rounded-lg" src="/images/service.jpg"
                  alt="a girl trying to do registration"
                  width="300"
                  height="400" />
              </div>

              <div className="card-details ">
                <div className="grid grid-cols-2 gap-10 ">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2 className="text-2xl capitalize font-bold">{service}</h2>
                <p>{description}</p>
              </div>


            </div>
          )})
        
        }

      </div>
    </>
  );
};
