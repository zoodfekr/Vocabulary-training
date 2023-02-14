import React, { Suspense } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { createPortal } from "react-dom"
import Input from "./components/Input";
import Words from './components/Words';
import Navbar from './components/Navbar';
import Appcontext from './context/Context';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './style/style.scss';
import { tranclateSchema } from "./validation/validation";
import { createword, dbwords, english_tranclate, persian_tranclate, remover, tranclate, update } from './services/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Word_editor from './components/Word_editor';
import Spiner from './components/Preloader';
import Error from './components/Error';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from '@mui/material/colors';
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { confirmAlert } from 'react-confirm-alert';

const App = () => {
  const [word, setWord] = useState(null); //کلمه دریافتی از کاربر
  const [meaning, setmeaning] = useState(null); // کلمه معنی شده از گوگل
  const [datawords, setdatawords] = useState(null); // کلمه های خوانده شده از سرور داخلی
  const [invalue, setinvalue] = useState(null); // خالی کننده مقدار ورودی ها
  const navigate = useNavigate();

  //  ترجمه کلمه
  useEffect(() => {
    const fetchData_google = async () => {
      if (word.english && word.persian) {
        setmeaning({ english: word.english, persian: word.persian })
        setinvalue("");
      } else {

        if (word.english && !word.persian) {
          setinvalue("");
          try {

            let { data: per, status } = await english_tranclate(word.english)
            setmeaning({ english: word.english, persian: per[0][0][0] })
            setinvalue(null);
            console.log(status)

          } catch (err) {
            setinvalue(null);
            console.log(' مشکل دریافت دیتا انگلیسی');
            alert("عدم دسترس به سرور")
          }
        }
        else if (word.persian && !word.english) {
          setinvalue("");
          try {
            let { data: eng } = await persian_tranclate(word.persian);
            setmeaning({ english: eng[0][0][0], persian: word.persian });
            setinvalue(null);
          } catch (err) {
            setinvalue(null);
            alert("عدم دسترس به سرور")
            console.log('مشکل دریافت دیتا فارسی');
          }
        }
      }
    };
    fetchData_google();
  }, [word]);
  // ثبت و خواندن اطلاعات از  سرور داخلی
  useEffect(() => {
    setmeaning(null);
    const creator = async () => {
      if (meaning != null && meaning.english != meaning.persian) {
        try {
          const { status } = await createword(meaning);
          if (status == 201) {
            toast.success("کلمه ساخته شد")
            console.log("کلمه ثبت شد");
            setinvalue(null);
          } else {
            console.log("ساخته نشد")
          }
        } catch (err) {
          console.log("مشکل ثبت در سرور داخلی");
        }
      }
      if (meaning == null) {
        try {
          let { data: words } = await dbwords();
          setdatawords(words);
          setinvalue(null)
        }
        catch (err) {
          console.log("مشکل خواندن دیتا از سرور داخلی");
        }
      }
    };
    creator()
  }, [meaning]);

  //حذف کننده کلمه

  const clear_s1 = (id) => {
    const container = document.getElementById("portal")
    confirmAlert({
      customUI: ({ onClose }) => {
        return (

          createPortal(< div className='custom-ui ' >
            <div className='border border-danger p-5 container' style={{
              backgroundColor: "#E5E8E8",
              borderRadius: "25px"
            }} dir='rtl'>
              {/* <h3 className='text-danger'>{`حذف ${event.fullname}`}</h3> */}
              <p className='text-dark'>آیا مطمئن هستید؟</p>

              <button className='btn btn-primary mx-1' onClick={onClose}>خیر</button>
              <button
                className='btn btn-danger mx-1'
                onClick={() => {
                  clear_s2(id); onClose();
                }}
              >
                بله
              </button>
            </div>
          </div >, container)



        );
      }
    });

  };

  const clear_s2 = async (id) => {
    try {
      const { status } = await remover(id);
      if (status == 200) {
        toast.success("کلمه حذف شد")
        try {
          let { data: words } = await dbwords();
          setdatawords(words);
        }
        catch (err) {
          console.log("مشکل خواندن دیتا از سرور داخلی");
        }
      }
    } catch {
      console.log("مشکل در حذف کلمه");
    }
  }


  // چک کننده کلمات تکراری
  const checker = (value) => {
    console.log("value:", value)
    let ebank = datawords.map(x => x.english);
    let pbank = datawords.map(x => x.persian);
    setinvalue("");
    if (ebank.includes(value.english) || pbank.includes(value.persian)) {
      setinvalue(null);
      alert("کلمه شما از قبل وجود دارد")
    } else {
      setWord(value)
      setinvalue(null);
    }
  }
  //به روزرسانی کلمه
  const handleupdate = async (id, data) => {
    try {
      const { status } = await update(id, data);
      if (status == 200) {
        toast.success("کلمه به روز شد  ")
        navigate('/');
        try {
          let { data: words } = await dbwords();
          setdatawords(words);
        }
        catch (err) {
          console.log("مشکل خواندن دیتا از سرور داخلی");
        }
      }
    } catch {
      console.log("مشکل در به روز رسانی کلمه");
    }
  }
  // theme
  const [mode, setmode] = useState(true);
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontSize: 12,
      fontFamily: [
        'vazir',
        'IranNastaliq',
        'B_Mitra_Bold'
      ].join(','),
    },
    palette: {
      mode: mode ? "light" : "dark",
    }
  })
  const cachertl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
  })



  return (
    <Appcontext.Provider value={{ datawords, clear_s1, checker, invalue, handleupdate, setmode }}>

      <CacheProvider value={cachertl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='/' element={<Input />}></Route>
              <Route path='/' element={<Words />}></Route>
              <Route path='/editor/:wid' element={<Word_editor />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </Appcontext.Provider >
  )
};

export default App;
