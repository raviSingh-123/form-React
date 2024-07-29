import { useState } from 'react'


function App() {
  
  return (
    <>
    <nav class="bg-blue-950 ">
        <div class="max-w-[1320px] mx-auto flex justify-between items-center flex-wrap">
            <ul class="flex gap-[14px] items-center p-[15px]">
                <li
                    class=" text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Home</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">About Us</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Contact </a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Solution</a></li>
                <li
                    class="text-[10px] md:text-[18px] font-semibold hover:text-blue-500 duration-[0.2s] hover:shadow-md text-white">
                    <a href="#">Email</a></li>
            </ul>
            <div class="gap-[10px] invisible md:visible text-white">
                <button class="border-2 border-solid border-black px-5 py-2 rounded-[5px] hover:text-blue-600 duration-[0.2s] hover:bg-white shadow-md bg-orange-400 ">Register</button>
                <button class="border-2 border-solid border-black px-5 py-2 rounded-[5px] hover:text-blue-600 duration-[0.2s] hover:bg-white shadow-md bg-orange-400 ">Login</button>
            </div>
        </div>
    </nav>
    <section class="bg-blue-400 md:py-[80px] sm:py-[50px] py-[30px]">
        <div class="max-w-[1320px] mx-auto">
            <div class="flex md:flex-row flex-col ">
                <div class="basis-[55%]  md:order-1 order-2">
                    <h3 class="md:text-[50px] text-[15px] font-bold">Empowering Futures: Cutting-Edge Technology and Innovation at Kalam Institute Technology</h3>
                    <h1 class="lg:text-[35px] sm:text-[25px] text-[15px] font-semibold md:py-[30px] py-[20px]">Fuiling
                        Skills, Igniting Careers</h1>
                    <p class="text-[20px] ">Master industry-relevant skills with our vernacular online courses. Choose
                        your program, get certificate, and open doors to lucrative career opportunities. </p>

                    <div class="flex gap-[20px] py-[30px]">
                        <button
                            class="text-[20px] border-2 border-black border-solid rounded-[5px] bg-slate-900 text-white md:p-[15px] p-[8px] hover:bg-white hover:text-black hover:shadow-lg duration-[0.5s]">Explore
                            Courses</button>
                        <button
                            class="text-[20px] border-2 border-black border-solid rounded-[5px] bg-slate-900 text-white md:p-[15px] p-[8px]  hover:bg-white hover:text-black hover:shadow-lg duration-[0.5s]">Book
                            Demo Class</button>

                    </div>

                </div>
                <div class="basis-[45%] md:order-2 ordr-1">
                    <img class="w-[60%] h-[60%] rounded-md md:w-[60%] md:h-[60%] mx-auto overflow-y-hidden  md:rounded-full border-[5px] border-solid border-black"
                        src="https://media.gettyimages.com/id/73101369/photo/indian-president-dr-apj-abdul-kalam-addressed-the-nation-on-the-eve-of-indias-republic-day-25.jpg?s=612x612&w=0&k=20&c=Uwa57CwLwJI33P2qvHsNHskaq-pGTHXehv_v0UjlCzo="
                        alt="image"/>
                </div>
            </div>
        </div>

        <div class="max-w-[1320px] mx-auto m-[5px]">
            <div class="flex gap-[30px]  md:flex-row flex-col">
                <div class="grow border-2 border-solid border-black flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
                <div class="grow border-2 border-solid border-black flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
                <div class="grow border-2 border-[solid] border-[black] flex items-center gap-[20px] p-[20px]">
                    <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/128/483/483141.png" alt=""/>
                    <div>
                        <h1>Profile-centric resume creation</h1>
                        <p>Craft minimalist & appealing resume</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-[1320px] mx-auto">
            <div class="flex flex-wrap">
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
                <div
                    class="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group hover:translate-y-[-10px] duration-[0.5s] ">
                    <img class="w-[60px] mx-auto group-hover:scale-125 duration-[0.5s] "
                        src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt=""/>
                    <h2 class="text-[20px] font-bold py-[15px] group-hover:text-blue-200">Comprehensive Full Stack
                        Experties</h2>
                    <p class="px-[20px]">Our online full stack development course is metiuculously design to provide
                        in-depth knowledge and hands on experience. We cover every aspect, ensuring you're well-prepared
                        for real world challenges. </p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="bg-red-100">
        <div class="max-w-[1170px] mx-auto">
            <h1 class="text-[30px] md:text-[40px] font-bold text-center">Our Services</h1>

            <div class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] ">
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">1. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>

                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">2. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">3. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">4. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">5. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">6. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
                <div class="shadow-lg pb-[20px]">
                    <img class="w-[100%]"
                        src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="classes" />
                    <div class="ps-[20px]">
                        <h4 class="text-[30px] font-serif font-semibold">7. Live Class</h4>
                        <p>During the live classes we will provide all facilities of students.In live class we will to
                            teach
                            web development,app development,and so more... If students wants only web development class
                            then
                            we provide only web development class for thats students.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="bg-slate-300 py-10 ">
        <h1 class="text-[30px] md:text-[40px] font-bold text-center">About Us</h1>
        <div class="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-[30px] py-[20px]">
            <div>
                <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
            </div>
            <div>
                <h3 class="text-2xl font-semibold text-center">Welcome to my college website</h3>
                <p class="leading-6"> We provide classes in online and offline mode .In offlline mode,Teachers will
                    easily instract to each other. And in online mode,we provide live class and record video of live
                    class in which any doubt of any student, those student repeat the recorded class. During the live
                    classes we will provide all facilities of students.In live class we will to teach web
                    development,app development,and so more... If students wants only web development class then we
                    provide only web development class for thats students.</p>
                <p lass="leading-6">Garaunty of placement ...Amazon, Google, Microsoft, Flipcard, Paytm and more
                    company
                    come for placement drive. So I hope this College best for your child. </p>
            </div>

        </div>
    </section>
     
    <footer class="bg-slate-500">
        <section class="max-w-[1320px] mx-auto">
            <div
                class=" grid md:grid-cols-[55%_45%] grid-cols[35%_65%] p-[10px] justify-between items-center       border-b-2 border-b-solid border-b-white">
                <div class="py-[15px] gap-[10px] md:visible invisible">
                    <p>Get connexted wuth us on social media</p>
                </div>
                <div
                    class="grid grid-cols-6 py-[15px] gap-[10px] justify-center items-center pl-[10%] pb-[20px] md:mr-[10%] md:pr-[2%]">
                    <img class="w-[15px]" src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" />
                    <img class="w-[15px] " src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" />
                    <img class="w-[15px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="" />
                    <img class="w-[15px]" src="https://cdn-icons-png.flaticon.com/128/104/104093.png" alt="" />
                    <img class="w-[15px]" src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" alt="" />
                    <img class="w-[15px]" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
                </div>
            </div>
            <div class="grid md:grid-cols-[40%_60%] grid-rows-[30%_60%] md:gap-4 gap-[1px] mt-[10px] justify-between text-center">
                <div>
                    <h3 class="text-[20px] font-semibold font-serif">KALAM TECHNOLOGY</h3>
                    <div class="ps-[5px] pr-[10px] text-left text-wrap">
                        <p class="py-[10px] font-sans">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Accusantium voluptatum animi rem
                            temporibus eligendi non magnam, error excepturi quos quidem aliquid iure recusandae!</p>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1 md:gap-[10px]  justify-between text-center">
                    <div class="justify-center text-center">
                        <h3 class="text-[18px] font-semibold font-serif">Product</h3>
                        <div >
                            <p class="text-[15px] font-serif text-black">HTML</p>
                            <p class="text-[15px] font-serif text-black">CSS</p>
                           <p class="text-[15px] font-serif text-black">JAVASCRIPT</p>
                            <p class="text-[15px] font-serif text-black">REACT</p>
                        </div>
                    </div>
                    <div class= "justify-center text-center">
                        <h3 class="text-[18px] font-semibold font-serif">USEFUL LINKS</h3>
                        <div>
                            <p class="text-[15px] font-serif text-black">Pricing</p>
                            <p class="text-[15px] font-serif text-black">Setting</p>
                           <p class="text-[15px] font-serif text-black">Order</p>
                            <p class="text-[15px] font-serif text-black">Help</p>
                        </div>
                    </div>
                    <div class="justify-center text-center pb-[2px]" >
                        <h3 class="text-[18px] font-semibold font-serif">CONTACT</h3>
                        <div>
                            <p class="text-[15px] font-serif text-black">New Delhi,110092</p>
                            <p class="text-[15px] font-serif text-black">kalamsupport@gmail.com</p>
                           <p class="text-[15px] font-serif text-black">+91 7765975312</p>
                            <p class="text-[15px] font-serif text-black">+91 7291034330</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </footer>
    </>
  )
}

export default App
