import Button from "../components/Button";

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-16">
      <div className="container bg-slate-50 w-[90%] md:w-[70%] flex flex-col items-center gap-8 mx-auto p-8">
        <div className="relative flex justify-center items-center w-full">
          <img 
            src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-[100%] md:w-[36%] h-[40vh] md:h-[42vh] mt-6 rounded-full z-10"
            alt="About Us"
          />
          <div className="w-[100%] md:w-[36%] h-[40vh] md:h-[42vh] top-0 left-0 md:left-[14rem] transform translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 rounded-full bg-slate-700 absolute"></div>
        </div>
        <div className="bg-slate-200 p-8 flex flex-col justify-center w-full text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ab vitae ex eum omnis nobis sapiente nostrum consequatur libero cum praesentium laboriosam fuga explicabo earum dolore similique reiciendis facilis id porro unde! Delectus provident optio distinctio eum impedit ex odio?</p>
          <div className="flex justify-center md:justify-start">
            <Button text={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

