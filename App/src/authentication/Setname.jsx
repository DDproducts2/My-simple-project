import React from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import { useAuthState } from '../secure/firebase'
const Setname = () => {

  const auth = getAuth();
  const { user } = useAuthState()
    if (user.name != null){
      return(
        <Take />
      )
    }
  function submit() {
    var name = document.getElementById('name').value
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!

      window.location.reload(false);
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });

  }
  
 
  
  return (

    <>
      <title>Choose a Username</title>
      <div className="card">
        <div className="e-c">
          <div className="item">
            <svg width="200" height="37" viewBox="0 0 266 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9844 1.875V25.0781C24.9688 28.2969 23.9531 30.9297 21.9375 32.9766C19.9375 35.0234 17.2188 36.1719 13.7812 36.4219L12.5859 36.4688C8.85156 36.4688 5.875 35.4609 3.65625 33.4453C1.4375 31.4297 0.3125 28.6562 0.28125 25.125V1.875H4.73438V24.9844C4.73438 27.4531 5.41406 29.375 6.77344 30.75C8.13281 32.1094 10.0703 32.7891 12.5859 32.7891C15.1328 32.7891 17.0781 32.1094 18.4219 30.75C19.7812 29.3906 20.4609 27.4766 20.4609 25.0078V1.875H24.9844ZM46.1719 29.2734C46.1719 28.1016 45.7266 27.1953 44.8359 26.5547C43.9609 25.8984 42.4219 25.3359 40.2188 24.8672C38.0312 24.3984 36.2891 23.8359 34.9922 23.1797C33.7109 22.5234 32.7578 21.7422 32.1328 20.8359C31.5234 19.9297 31.2188 18.8516 31.2188 17.6016C31.2188 15.5234 32.0938 13.7656 33.8438 12.3281C35.6094 10.8906 37.8594 10.1719 40.5938 10.1719C43.4688 10.1719 45.7969 10.9141 47.5781 12.3984C49.375 13.8828 50.2734 15.7812 50.2734 18.0938H45.9141C45.9141 16.9062 45.4062 15.8828 44.3906 15.0234C43.3906 14.1641 42.125 13.7344 40.5938 13.7344C39.0156 13.7344 37.7812 14.0781 36.8906 14.7656C36 15.4531 35.5547 16.3516 35.5547 17.4609C35.5547 18.5078 35.9688 19.2969 36.7969 19.8281C37.625 20.3594 39.1172 20.8672 41.2734 21.3516C43.4453 21.8359 45.2031 22.4141 46.5469 23.0859C47.8906 23.7578 48.8828 24.5703 49.5234 25.5234C50.1797 26.4609 50.5078 27.6094 50.5078 28.9688C50.5078 31.2344 49.6016 33.0547 47.7891 34.4297C45.9766 35.7891 43.625 36.4688 40.7344 36.4688C38.7031 36.4688 36.9062 36.1094 35.3438 35.3906C33.7812 34.6719 32.5547 33.6719 31.6641 32.3906C30.7891 31.0938 30.3516 29.6953 30.3516 28.1953H34.6875C34.7656 29.6484 35.3438 30.8047 36.4219 31.6641C37.5156 32.5078 38.9531 32.9297 40.7344 32.9297C42.375 32.9297 43.6875 32.6016 44.6719 31.9453C45.6719 31.2734 46.1719 30.3828 46.1719 29.2734ZM66.6797 36.4688C63.2422 36.4688 60.4453 35.3438 58.2891 33.0938C56.1328 30.8281 55.0547 27.8047 55.0547 24.0234V23.2266C55.0547 20.7109 55.5312 18.4688 56.4844 16.5C57.4531 14.5156 58.7969 12.9688 60.5156 11.8594C62.25 10.7344 64.125 10.1719 66.1406 10.1719C69.4375 10.1719 72 11.2578 73.8281 13.4297C75.6562 15.6016 76.5703 18.7109 76.5703 22.7578V24.5625H59.3906C59.4531 27.0625 60.1797 29.0859 61.5703 30.6328C62.9766 32.1641 64.7578 32.9297 66.9141 32.9297C68.4453 32.9297 69.7422 32.6172 70.8047 31.9922C71.8672 31.3672 72.7969 30.5391 73.5938 29.5078L76.2422 31.5703C74.1172 34.8359 70.9297 36.4688 66.6797 36.4688ZM66.1406 13.7344C64.3906 13.7344 62.9219 14.375 61.7344 15.6562C60.5469 16.9219 59.8125 18.7031 59.5312 21H72.2344V20.6719C72.1094 18.4688 71.5156 16.7656 70.4531 15.5625C69.3906 14.3438 67.9531 13.7344 66.1406 13.7344ZM93.8672 14.5312C93.2109 14.4219 92.5 14.3672 91.7344 14.3672C88.8906 14.3672 86.9609 15.5781 85.9453 18V36H81.6094V10.6406H85.8281L85.8984 13.5703C87.3203 11.3047 89.3359 10.1719 91.9453 10.1719C92.7891 10.1719 93.4297 10.2812 93.8672 10.5V14.5312ZM101.977 10.6406L102.117 13.8281C104.055 11.3906 106.586 10.1719 109.711 10.1719C115.07 10.1719 117.773 13.1953 117.82 19.2422V36H113.484V19.2188C113.469 17.3906 113.047 16.0391 112.219 15.1641C111.406 14.2891 110.133 13.8516 108.398 13.8516C106.992 13.8516 105.758 14.2266 104.695 14.9766C103.633 15.7266 102.805 16.7109 102.211 17.9297V36H97.875V10.6406H101.977ZM140.016 36C139.766 35.5 139.562 34.6094 139.406 33.3281C137.391 35.4219 134.984 36.4688 132.188 36.4688C129.688 36.4688 127.633 35.7656 126.023 34.3594C124.43 32.9375 123.633 31.1406 123.633 28.9688C123.633 26.3281 124.633 24.2812 126.633 22.8281C128.648 21.3594 131.477 20.625 135.117 20.625H139.336V18.6328C139.336 17.1172 138.883 15.9141 137.977 15.0234C137.07 14.1172 135.734 13.6641 133.969 13.6641C132.422 13.6641 131.125 14.0547 130.078 14.8359C129.031 15.6172 128.508 16.5625 128.508 17.6719H124.148C124.148 16.4062 124.594 15.1875 125.484 14.0156C126.391 12.8281 127.609 11.8906 129.141 11.2031C130.688 10.5156 132.383 10.1719 134.227 10.1719C137.148 10.1719 139.438 10.9062 141.094 12.375C142.75 13.8281 143.609 15.8359 143.672 18.3984V30.0703C143.672 32.3984 143.969 34.25 144.562 35.625V36H140.016ZM132.82 32.6953C134.18 32.6953 135.469 32.3438 136.688 31.6406C137.906 30.9375 138.789 30.0234 139.336 28.8984V23.6953H135.938C130.625 23.6953 127.969 25.25 127.969 28.3594C127.969 29.7188 128.422 30.7812 129.328 31.5469C130.234 32.3125 131.398 32.6953 132.82 32.6953ZM154.547 10.6406L154.664 13.4531C156.523 11.2656 159.031 10.1719 162.188 10.1719C165.734 10.1719 168.148 11.5312 169.43 14.25C170.273 13.0312 171.367 12.0469 172.711 11.2969C174.07 10.5469 175.672 10.1719 177.516 10.1719C183.078 10.1719 185.906 13.1172 186 19.0078V36H181.664V19.2656C181.664 17.4531 181.25 16.1016 180.422 15.2109C179.594 14.3047 178.203 13.8516 176.25 13.8516C174.641 13.8516 173.305 14.3359 172.242 15.3047C171.18 16.2578 170.562 17.5469 170.391 19.1719V36H166.031V19.3828C166.031 15.6953 164.227 13.8516 160.617 13.8516C157.773 13.8516 155.828 15.0625 154.781 17.4844V36H150.445V10.6406H154.547ZM203.086 36.4688C199.648 36.4688 196.852 35.3438 194.695 33.0938C192.539 30.8281 191.461 27.8047 191.461 24.0234V23.2266C191.461 20.7109 191.938 18.4688 192.891 16.5C193.859 14.5156 195.203 12.9688 196.922 11.8594C198.656 10.7344 200.531 10.1719 202.547 10.1719C205.844 10.1719 208.406 11.2578 210.234 13.4297C212.062 15.6016 212.977 18.7109 212.977 22.7578V24.5625H195.797C195.859 27.0625 196.586 29.0859 197.977 30.6328C199.383 32.1641 201.164 32.9297 203.32 32.9297C204.852 32.9297 206.148 32.6172 207.211 31.9922C208.273 31.3672 209.203 30.5391 210 29.5078L212.648 31.5703C210.523 34.8359 207.336 36.4688 203.086 36.4688ZM202.547 13.7344C200.797 13.7344 199.328 14.375 198.141 15.6562C196.953 16.9219 196.219 18.7031 195.938 21H208.641V20.6719C208.516 18.4688 207.922 16.7656 206.859 15.5625C205.797 14.3438 204.359 13.7344 202.547 13.7344Z" fill="white" />
              <path d="M264 15H260.638C260.314 13.631 259.774 12.349 259.056 11.186L261.435 8.807C262.216 8.026 262.216 6.759 261.435 5.978L260.021 4.564C259.24 3.783 257.974 3.783 257.193 4.564L254.814 6.943C253.65 6.225 252.369 5.686 251 5.362V2C251 0.896 250.104 0 249 0H247C245.896 0 245 0.896 245 2V5.362C243.631 5.686 242.349 6.226 241.186 6.944L238.808 4.565C238.027 3.784 236.76 3.784 235.98 4.565L234.565 5.979C233.784 6.76 233.784 8.027 234.564 8.808L236.943 11.187C236.225 12.35 235.686 13.632 235.362 15H232C230.896 15 230 15.896 230 17V19C230 20.104 230.896 21 232 21H235.362C235.686 22.368 236.226 23.65 236.944 24.813L234.565 27.192C233.785 27.972 233.785 29.24 234.566 30.021L235.98 31.435C236.76 32.215 238.027 32.215 238.808 31.435L241.187 29.056C242.35 29.775 243.632 30.314 245.001 30.638V34C245.001 35.104 245.897 36 247.001 36H249.001C250.105 36 251.001 35.104 251.001 34V30.638C252.369 30.314 253.651 29.774 254.814 29.056L257.193 31.435C257.974 32.216 259.24 32.216 260.021 31.435L261.435 30.021C262.216 29.24 262.216 27.973 261.435 27.192L259.056 24.813C259.775 23.65 260.314 22.368 260.638 20.999H264C265.104 20.999 266 20.103 266 18.999V16.999C266 15.896 265.104 15 264 15ZM248 26C243.582 26 240 22.418 240 18C240 13.582 243.582 10 248 10C252.418 10 256 13.582 256 18C256 22.418 252.418 26 248 26Z" fill="#66757F" />
            </svg>



          </div>
          <div className="item">




            <input placeholder="username" maxlength="14" id="name" />
          </div>
          <button onClick={submit} className="button"><svg className="submit" width="220" height="67" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path filrule="evenodd" clipRule="evenodd" d="M237.875 8.375C237.875 7.26441 237.44 6.1993 236.667 5.41399C235.893 4.62868 234.844 4.1875 233.75 4.1875H184.25C183.156 4.1875 182.107 4.62868 181.333 5.41399C180.56 6.1993 180.125 7.26441 180.125 8.375V58.625C180.125 59.7356 180.56 60.8007 181.333 61.586C182.107 62.3713 183.156 62.8125 184.25 62.8125H233.75C234.844 62.8125 235.893 62.3713 236.667 61.586C237.44 60.8007 237.875 59.7356 237.875 58.625V8.375ZM176 8.375C176 6.15381 176.869 4.0236 178.416 2.45298C179.964 0.882364 182.062 0 184.25 0L233.75 0C235.938 0 238.036 0.882364 239.584 2.45298C241.131 4.0236 242 6.15381 242 8.375V58.625C242 60.8462 241.131 62.9764 239.584 64.547C238.036 66.1176 235.938 67 233.75 67H184.25C182.062 67 179.964 66.1176 178.416 64.547C176.869 62.9764 176 60.8462 176 58.625V8.375ZM194.563 31.4063C194.015 31.4063 193.491 31.6268 193.104 32.0195C192.717 32.4121 192.5 32.9447 192.5 33.5C192.5 34.0553 192.717 34.5879 193.104 34.9805C193.491 35.3732 194.015 35.5938 194.563 35.5938H218.459L209.602 44.5801C209.41 44.7748 209.258 45.0059 209.155 45.2602C209.051 45.5146 208.997 45.7872 208.997 46.0625C208.997 46.3378 209.051 46.6104 209.155 46.8648C209.258 47.1191 209.41 47.3502 209.602 47.5449C209.794 47.7395 210.022 47.894 210.272 47.9993C210.523 48.1047 210.791 48.1589 211.063 48.1589C211.334 48.1589 211.602 48.1047 211.853 47.9993C212.103 47.894 212.331 47.7395 212.523 47.5449L224.898 34.9824C225.09 34.7879 225.242 34.5568 225.346 34.3025C225.45 34.0481 225.504 33.7754 225.504 33.5C225.504 33.2246 225.45 32.9519 225.346 32.6975C225.242 32.4432 225.09 32.2121 224.898 32.0176L212.523 19.4551C212.331 19.2605 212.103 19.106 211.853 19.0007C211.602 18.8953 211.334 18.8411 211.063 18.8411C210.791 18.8411 210.523 18.8953 210.272 19.0007C210.022 19.106 209.794 19.2605 209.602 19.4551C209.41 19.6498 209.258 19.8809 209.155 20.1352C209.051 20.3896 208.997 20.6622 208.997 20.9375C208.997 21.2128 209.051 21.4854 209.155 21.7398C209.258 21.9941 209.41 22.2252 209.602 22.4199L218.459 31.4063H194.563Z" fill="#FF0000" />
            <path d="M13.0156 28.7891C9.15625 27.6797 6.34375 26.3203 4.57812 24.7109C2.82812 23.0859 1.95312 21.0859 1.95312 18.7109C1.95312 16.0234 3.02344 13.8047 5.16406 12.0547C7.32031 10.2891 10.1172 9.40625 13.5547 9.40625C15.8984 9.40625 17.9844 9.85937 19.8125 10.7656C21.6562 11.6719 23.0781 12.9219 24.0781 14.5156C25.0938 16.1094 25.6016 17.8516 25.6016 19.7422H21.0781C21.0781 17.6797 20.4219 16.0625 19.1094 14.8906C17.7969 13.7031 15.9453 13.1094 13.5547 13.1094C11.3359 13.1094 9.60156 13.6016 8.35156 14.5859C7.11719 15.5547 6.5 16.9062 6.5 18.6406C6.5 20.0312 7.08594 21.2109 8.25781 22.1797C9.44531 23.1328 11.4531 24.0078 14.2812 24.8047C17.125 25.6016 19.3438 26.4844 20.9375 27.4531C22.5469 28.4062 23.7344 29.5234 24.5 30.8047C25.2812 32.0859 25.6719 33.5938 25.6719 35.3281C25.6719 38.0938 24.5938 40.3125 22.4375 41.9844C20.2812 43.6406 17.3984 44.4688 13.7891 44.4688C11.4453 44.4688 9.25781 44.0234 7.22656 43.1328C5.19531 42.2266 3.625 40.9922 2.51562 39.4297C1.42188 37.8672 0.875 36.0938 0.875 34.1094H5.39844C5.39844 36.1719 6.15625 37.8047 7.67188 39.0078C9.20312 40.1953 11.2422 40.7891 13.7891 40.7891C16.1641 40.7891 17.9844 40.3047 19.25 39.3359C20.5156 38.3672 21.1484 37.0469 21.1484 35.375C21.1484 33.7031 20.5625 32.4141 19.3906 31.5078C18.2188 30.5859 16.0938 29.6797 13.0156 28.7891ZM46.4375 41.4922C44.75 43.4766 42.2734 44.4688 39.0078 44.4688C36.3047 44.4688 34.2422 43.6875 32.8203 42.125C31.4141 40.5469 30.7031 38.2188 30.6875 35.1406V18.6406H35.0234V35.0234C35.0234 38.8672 36.5859 40.7891 39.7109 40.7891C43.0234 40.7891 45.2266 39.5547 46.3203 37.0859V18.6406H50.6562V44H46.5312L46.4375 41.4922ZM78.7344 31.6016C78.7344 35.4766 77.8438 38.5938 76.0625 40.9531C74.2812 43.2969 71.8906 44.4688 68.8906 44.4688C65.6875 44.4688 63.2109 43.3359 61.4609 41.0703L61.25 44H57.2656V8H61.6016V21.4297C63.3516 19.2578 65.7656 18.1719 68.8438 18.1719C71.9219 18.1719 74.3359 19.3359 76.0859 21.6641C77.8516 23.9922 78.7344 27.1797 78.7344 31.2266V31.6016ZM74.3984 31.1094C74.3984 28.1562 73.8281 25.875 72.6875 24.2656C71.5469 22.6562 69.9062 21.8516 67.7656 21.8516C64.9062 21.8516 62.8516 23.1797 61.6016 25.8359V36.8047C62.9297 39.4609 65 40.7891 67.8125 40.7891C69.8906 40.7891 71.5078 39.9844 72.6641 38.375C73.8203 36.7656 74.3984 34.3438 74.3984 31.1094ZM88.2969 18.6406L88.4141 21.4531C90.2734 19.2656 92.7812 18.1719 95.9375 18.1719C99.4844 18.1719 101.898 19.5312 103.18 22.25C104.023 21.0312 105.117 20.0469 106.461 19.2969C107.82 18.5469 109.422 18.1719 111.266 18.1719C116.828 18.1719 119.656 21.1172 119.75 27.0078V44H115.414V27.2656C115.414 25.4531 115 24.1016 114.172 23.2109C113.344 22.3047 111.953 21.8516 110 21.8516C108.391 21.8516 107.055 22.3359 105.992 23.3047C104.93 24.2578 104.312 25.5469 104.141 27.1719V44H99.7812V27.3828C99.7812 23.6953 97.9766 21.8516 94.3672 21.8516C91.5234 21.8516 89.5781 23.0625 88.5312 25.4844V44H84.1953V18.6406H88.2969ZM131.023 44H126.688V18.6406H131.023V44ZM126.336 11.9141C126.336 11.2109 126.547 10.6172 126.969 10.1328C127.406 9.64844 128.047 9.40625 128.891 9.40625C129.734 9.40625 130.375 9.64844 130.812 10.1328C131.25 10.6172 131.469 11.2109 131.469 11.9141C131.469 12.6172 131.25 13.2031 130.812 13.6719C130.375 14.1406 129.734 14.375 128.891 14.375C128.047 14.375 127.406 14.1406 126.969 13.6719C126.547 13.2031 126.336 12.6172 126.336 11.9141ZM143.867 12.5V18.6406H148.602V21.9922H143.867V37.7188C143.867 38.7344 144.078 39.5 144.5 40.0156C144.922 40.5156 145.641 40.7656 146.656 40.7656C147.156 40.7656 147.844 40.6719 148.719 40.4844V44C147.578 44.3125 146.469 44.4688 145.391 44.4688C143.453 44.4688 141.992 43.8828 141.008 42.7109C140.023 41.5391 139.531 39.875 139.531 37.7188V21.9922H134.914V18.6406H139.531V12.5H143.867Z" fill="#FFFF00" />
          </svg>
          </button>
        </div>

      </div>

    </>
  )
}


export const Take = () => {
  return (
    <div>
      
    </div>
  )
}

export default Setname