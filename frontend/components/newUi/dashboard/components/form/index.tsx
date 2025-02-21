"use client";
import { useDashboardContext } from "@/components/newUi/contextApi/dashboardContext";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/components/newUi/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
import { useRouter } from "next/navigation";
export default function UpdateForm() {
  const router = useRouter();
  const dataContext = useDashboardContext();
  const mainSection = dataContext.mainSection;
  const midSection = dataContext.midSection;
  const childSection = dataContext.childSection;
  const [sec, setSec] = useState("");
  const [section, setSection] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [text, setText] = useState("");
  const [counter1, setCounter1] = useState("");
  const [counter1Text, setCounter1Text] = useState("");
  const [counter2, setCounter2] = useState("");
  const [counter2Text, setCounter2Text] = useState("");
  const [photo1, setPhoto1] = useState<any>(null);
  const [bannerPhoto, setBannerPhoto] = useState<any>(null);
  const [heroPhoto, setHeroPhoto] = useState<any>(null);
  const [photo2, setPhoto2] = useState<any>(null);
  const [video1, setVideo1] = useState<any>(null);
  const [video2, setVideo2] = useState<any>(null);
  const [video3, setVideo3] = useState<any>(null);
  const [urlList, setUrlList] = useState<any>([]);
  const [mainBannerUrlList, setMainBannerUrlList] = useState<any>([]);
  const [ourDepartmentUrlList, setOurDepartmentUrlList] = useState<any>([]);
  const [ramazanUrlList, setRamazanUrlList] = useState<any>([]);
  const [zakatUrlList, setZakatUrlList] = useState<any>([]);
  const [foodBoxUrlList, setFoodBoxUrlList] = useState<any>([]);
  const [winterUrlList, setWinterUrlList] = useState<any>([]);
  const [palestineUrlList, setPalestineUrlList] = useState<any>([]);
  const [orphanUrlList, setOrphanUrlList] = useState<any>([]);
  const [handPumpUrlList, setHandPumpUrlList] = useState<any>([]);
  const [waterUrlList, setWaterUrlList] = useState<any>([]);
  const [masjidUrlList, setMasjidUrlList] = useState<any>([]);
  const [achievementUrlList, setAchievementUrlList] = useState<any>([]);
  const [newsVideoUrlList, setnewsVideoUrlList] = useState<any>([]);
  const [galleryUrlList, setGalleryUrlList] = useState<any>([]);
  const [uploading1, setUploading1] = useState(false);
  const [uploadingOurDepartmentSlider, setUploadingOurDepartmentSlider] =
    useState(false);
  const [uploadingRamzanSlider, setUploadingRamzanSlider] = useState(false);
  const [uploadingZakatSlider, setUploadingZakatSlider] = useState(false);
  const [uploadingFoodBoxSlider, setUploadingFoodBoxSlider] = useState(false);
  const [uploadingWinterSlider, setUploadingWinterSlider] = useState(false);
  const [uploadingPalestineSlider, setUploadingPalestineSlider] =
    useState(false);
  const [uploadingOrphanSlider, setUploadingOrphanSlider] = useState(false);
  const [uploadingHandPumpSlider, setUploadingHandPumpSlider] = useState(false);
  const [uploadingWaterWellSlider, setUploadingWaterWellSlider] =
    useState(false);
  const [uploadingMasjidSlider, setUploadingMasjidSlider] = useState(false);
  const [uploadingGallerySlider, setUploadingGallerySlider] = useState(false);
  const [uploadingVideosSlider, setUploadingVideosSlider] = useState(false);
  const [uploadingVideosNews, setUploadingVideosNews] = useState(false);
  const [uploadingAchievementImages, setUploadingAchievementImages] =
    useState(false);
  const contentContext = useContentContext();
  const data = contentContext.content;
  const data2 = contentContext.content;
  const fetchAllData = data.filter(
    (title: any) => "Main Page" === title.content.sec
  );

  const disasterManagementLst = [
    "Select An Options",
    "Disaster Management",
    "Covid-19",
    "Pakistan Flood",
    "Turkey & Syria Earthquake",
    "Morocco Earthquake",
    "Palestine",
  ];
  const healthCareLst = [
    "Select An Option",
    "Health Care",
    "Eye Camps",
    "Blood Donation",
    "Madical Van",
    "Faizan Rehabilitation Center",
    "Madical Clinic",
  ];
  const environmentDepartmentLst = [
    "Select An Option",
    "Environment Department",
    "Plantation",
  ];

  const mainSectionList = [
    "Select An Option",
    "Our Department",
    "Appeals",
    "Donation",
  ];
  const [numbIndex, setNumIndex] = useState(null);
  const [switchPageArr, setSwitchPageArr] = useState(false);
  const [mySwitch, setMySwitch] = useState(false);
  const foodboxSliderSwitch = fetchAllData[0]?.content?.foodboxSlider?.switch;
  const handPumpSliderSwitch = fetchAllData[0]?.content?.handPumpSlider?.switch;
  const masjidSliderSwitch = fetchAllData[0]?.content?.masjidSlider?.switch;
  const orphanSliderSwitch = fetchAllData[0]?.content?.orphanSlider?.switch;
  const palestineSliderSwitch =
    fetchAllData[0]?.content?.palestineSlider?.switch;
  const ramazanSliderSwitch = fetchAllData[0]?.content?.ramazanSlider?.switch;
  const waterWellSliderrSwitch =
    fetchAllData[0]?.content?.waterWellSlider?.switch;
  const winterSliderSwitch = fetchAllData[0]?.content?.winterSlider?.switch;
  const zakatSliderSwitch = fetchAllData[0]?.content?.zakatSlider?.switch;
  const arrayAppeal = [
    { title: "foodboxSlider", switch: foodboxSliderSwitch },
    { title: "handPumpSlider", switch: handPumpSliderSwitch },
    { title: "masjidSlider", switch: masjidSliderSwitch },
    { title: "orphanSlider", switch: orphanSliderSwitch },
    { title: "palestineSlider", switch: palestineSliderSwitch },
    { title: "ramazanSlider", switch: ramazanSliderSwitch },
    { title: "waterWellSlider", switch: waterWellSliderrSwitch },
    { title: "winterSlider", switch: winterSliderSwitch },
    { title: "zakatSlider", switch: zakatSliderSwitch },
  ];
  // yeha say
  const [stateArray, setStateArray] = useState(arrayAppeal);
  const [stateArrayPages, setStateArrayPages] = useState(data);

  const handleToggleChange = (index: any) => {
    const updatedArray = [...stateArray];
    const item = updatedArray[index];
    const newSwitchValue = item.switch === "true" ? "false" : "true";
    item.switch = newSwitchValue;
    setStateArray(updatedArray);
  };
  const handleToggleChange1 = (index: any) => {
    const updatedArray = [...arrayAppeal];
    const item = updatedArray[index];
    const newSwitchValue = item.switch === "true" ? "false" : "true";
    item.switch = newSwitchValue;
    setStateArray(updatedArray);
  };
  const handleToggleChangePage = (index: any) => {
    const updatedArray = [...stateArrayPages];
    const item = updatedArray[index];
    const newSwitchValue = item.content.switch === "true" ? "false" : "true";
    item.content.switch = newSwitchValue;
    setStateArrayPages(updatedArray);
  };
  const handleToggleChangePage1 = (index: any) => {
    const updatedArray = [...data];
    const item = updatedArray[index];
    const newSwitchValue = item.content.switch === "true" ? "false" : "true";
    item.content.switch = newSwitchValue;
    console.log("updatedArray---->", updatedArray);
    setStateArrayPages(updatedArray);
  };

  // const funcHandler = (id: any) => {
  //   if (id === numbIndex) {
  //     setMySwitch(true);
  //   } else {
  //     setMySwitch(false);
  //   }
  // };

  // Submit Handler
  const [loader, setLoader] = useState<boolean>(false);
  const submitHandler = async (e: any) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    e.preventDefault();
    if (mainSection === "New Page") {
      let a = Math.random();
      if (sec === "Donation") {
        try {
          const newCollectionRef = collection(db, "contents");
          const newDocRef = doc(newCollectionRef);

          const storageRef1 = ref(
            storage,
            "images/" + photo1?.name + a.toString().slice(2, 10)
          );
          const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
          const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
          const mainSection = {
            content: {
              sec: sectionName,
              mainSec: "Donation",
              url: `/donation/${sectionName
                .toLocaleLowerCase()
                .split(" ")
                .join("-")}`,
              text: text,
              switch: "true",
              photo: titleImageUrl1,
            },
          };
          await setDoc(newDocRef, mainSection, { merge: true });
          if (mainSection !== undefined) {
            console.log("Ok ki report hai bahi");
          }
          router.refresh()
        } catch (error) {
          console.error("Roko bahi firebaser error arha hai--->", error);
        }
      } else if (sec === "Appeals") {
        try {
          const newCollectionRef = collection(db, "contents");
          const newDocRef = doc(newCollectionRef);
          const storageRef1 = ref(
            storage,
            "images/" + photo1?.name + a.toString().slice(2, 10)
          );
          const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
          const appeal1ImageUrl = await getDownloadURL(titleSnapshot1.ref);
          const storageRef2 = ref(
            storage,
            "images/" + photo2?.name + a.toString().slice(2, 10)
          );
          const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
          const appeal2ImageUrl = await getDownloadURL(titleSnapshot2.ref);
          const videosRef1 = ref(storage, "videos/" + video1?.name);
          const titleVideos1 = await uploadBytes(videosRef1, video1);
          const videoUrl1 = await getDownloadURL(titleVideos1.ref);
          const videosRef2 = ref(storage, "videos/" + video2?.name);
          const titleVideos2 = await uploadBytes(videosRef2, video2);
          const videoUrl2 = await getDownloadURL(titleVideos2.ref);
          const mainSection = {
            content: {
              sec: sectionName,
              mainSec: "Appeals",
              url: `/appeal/${sectionName
                .toLocaleLowerCase()
                .split(" ")
                .join("-")}`,
              text: text,
              switch: "true",
              video: [videoUrl1, videoUrl2],
              photo: [appeal1ImageUrl, appeal2ImageUrl],
              slider: urlList,
            },
          };
          await setDoc(newDocRef, mainSection, { merge: true });
          if (mainSection !== undefined) {
            console.log("Ok ki report hai bahi");
          }
          router.refresh()
        } catch (error) {
          console.error("Roko bahi firebaser error arha hai--->", error);
        }
      } else if (sec === "Our Department") {
        try {
          const newCollectionRef = collection(db, "contents");
          const newDocRef = doc(newCollectionRef);
          const storageRef1 = ref(
            storage,
            "images/" + bannerPhoto?.name + a.toString().slice(2, 10)
          );
          const titleSnapshot1 = await uploadBytes(storageRef1, bannerPhoto);
          const ourDepartment1Url = await getDownloadURL(titleSnapshot1.ref);
          const storageRef2 = ref(
            storage,
            "images/" + heroPhoto?.name + a.toString().slice(2, 10)
          );
          const titleSnapshot2 = await uploadBytes(storageRef2, heroPhoto);
          const ourDepartment2Url = await getDownloadURL(titleSnapshot2.ref);
          const videosRef1 = ref(storage, "videos/" + video1?.name);
          const titleVideos1 = await uploadBytes(videosRef1, video1);
          const videoUrl1 = await getDownloadURL(titleVideos1.ref);
          const mainSection = {
            content: {
              sec: sectionName,
              mainSec: "Our Department",
              url: `/our-department/${sectionName
                .toLocaleLowerCase()
                .split(" ")
                .join("-")}`,
              text: text,
              switch: "true",
              slider: urlList,
              video: videoUrl1,
              bannerImg: ourDepartment1Url,
              heroSecImg: ourDepartment2Url,
            },
          };
          await setDoc(newDocRef, mainSection, { merge: true });
          if (mainSection !== undefined) {
            console.log("Ok ki report hai bahi");
          }
          router.refresh()
        } catch (error) {
          console.error("Roko bahi firebaser error arha hai--->", error);
        }
      }
    } else {
      let a = Math.random();
      const dataRef = collection(db, "contents");
      const querySnapshot = await getDocs(dataRef);
      querySnapshot.forEach(async (docs) => {
        const docsData = docs.data();
        const chooseSec = docsData.content.sec;
        const chooseContent = docsData.content;
        if (mainSection === "Our Department") {
          if (chooseSec === sec) {
            let bannerImageUrl;
            let heroImageUrl;
            let videoUrl;
            if (bannerPhoto) {
              const storageRef1 = ref(
                storage,
                "images/" + bannerPhoto?.name + a.toString().slice(2, 10)
              );
              const bannerSnapShot = await uploadBytes(
                storageRef1,
                bannerPhoto
              );
              bannerImageUrl = await getDownloadURL(bannerSnapShot.ref);
            } else {
              bannerImageUrl = undefined;
            }
            if (heroPhoto) {
              const storageRef2 = ref(
                storage,
                "images/" + heroPhoto?.name + a.toString().slice(2, 10)
              );
              const heroSnapShot = await uploadBytes(storageRef2, heroPhoto);
              heroImageUrl = await getDownloadURL(heroSnapShot.ref);
            } else {
              heroImageUrl = undefined;
            }
            if (video1) {
              const videosRef = ref(storage, "videos/" + video1?.name);
              const titleVideos = await uploadBytes(videosRef, video1);
              videoUrl = await getDownloadURL(titleVideos.ref);
            } else {
              videoUrl = undefined;
            }
            const docsId = docs.id;
            const docRef = doc(db, "contents", docsId);
            await updateDoc(docRef, {
              content: {
                bannerImg: bannerImageUrl
                  ? bannerImageUrl
                  : chooseContent.bannerImg,
                heroSecImg: heroImageUrl
                  ? heroImageUrl
                  : chooseContent.heroSecImg,
                sec: sec || chooseContent.sec,
                text: text ? text : chooseContent.text,
                slider: urlList.length > 0 ? urlList : chooseContent.slider,
                video: videoUrl ? videoUrl : chooseContent.video,
                mainSec: chooseContent.mainSec || "Our Department",
                switch: chooseContent.switch,
                url: chooseContent.url,
              },
            });
            router.refresh()
          }
        }
        if (mainSection === "Appeals") {
          if (chooseSec === sec) {
            let a = Math.random();
            let firstImageUrl;
            let secondImageUrl;
            let videoUrl1;
            let videoUrl2;
            if (photo1) {
              const storageRef1 = ref(
                storage,
                "images/" + photo1?.name + a.toString().slice(2, 10)
              );
              const firstImageSnapShot = await uploadBytes(storageRef1, photo1);
              firstImageUrl = await getDownloadURL(firstImageSnapShot.ref);
            } else {
              firstImageUrl = undefined;
            }
            if (photo2) {
              const storageRef2 = ref(
                storage,
                "images/" + photo2?.name + a.toString().slice(2, 10)
              );
              const secondImageSnapShot = await uploadBytes(
                storageRef2,
                photo2
              );
              secondImageUrl = await getDownloadURL(secondImageSnapShot.ref);
            } else {
              secondImageUrl = undefined;
            }
            if (video1) {
              const videosRef1 = ref(storage, "videos/" + video1?.name);
              const titleVideos1 = await uploadBytes(videosRef1, video1);
              videoUrl1 = await getDownloadURL(titleVideos1.ref);
            } else {
              videoUrl1 = undefined;
            }
            if (video2) {
              const videosRef2 = ref(storage, "videos/" + video2?.name);
              const titleVideos2 = await uploadBytes(videosRef2, video2);
              videoUrl2 = await getDownloadURL(titleVideos2.ref);
            } else {
              videoUrl2 = undefined;
            }
            const docsId = docs.id;
            const docRef = doc(db, "contents", docsId);
            await updateDoc(docRef, {
              content: {
                photo: [
                  firstImageUrl ? firstImageUrl : chooseContent.photo[0],
                  secondImageUrl ? secondImageUrl : chooseContent.photo[1],
                ],
                sec: sec || chooseContent.sec,
                mainSec: chooseContent.mainSec || "Appeals",
                text: text ? text : chooseContent.text,
                slider: urlList.length > 0 ? urlList : chooseContent.slider,
                video:
                  videoUrl1 && videoUrl2
                    ? [videoUrl1, videoUrl2]
                    : chooseContent.video,
                url: chooseContent.url,
                switch: chooseContent.switch,
              },
            });
            router.refresh()
          }
        }
        if (mainSection === "Donations") {
          if (chooseSec === sec) {
            let titleImageUrl1;
            if (photo1) {
              const storageRef1 = ref(
                storage,
                "images/" + photo1?.name + a.toString().slice(2, 10)
              );
              const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
              titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
            } else {
              titleImageUrl1 = undefined;
            }
            const docsId = docs.id;
            const docRef = doc(db, "contents", docsId);
            await updateDoc(docRef, {
              content: {
                sec: sec || chooseContent.sec,
                text: text || chooseContent.text,
                photo: titleImageUrl1 ? titleImageUrl1 : chooseContent.photo,
                switch: chooseContent.switch,
                url: chooseContent.url,
                mainSec: chooseContent.mainSec || "Donation",
              },
            });
            router.refresh()
          }
        }
        if (mainSection === "Main Page") {
          if (chooseSec === sec) {
            let a = Math.random();
            let counter1ImageUrl;
            let counter2ImageUrl;
            let videoUrl1;
            let videoUrl2;
            let videoUrl3;
            if (photo1) {
              const storageRef1 = ref(
                storage,
                "images/" + photo1?.name + a.toString().slice(2, 10)
              );
              const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
              counter1ImageUrl = await getDownloadURL(titleSnapshot1.ref);
            } else {
              counter1ImageUrl = undefined;
            }
            if (photo2) {
              const storageRef2 = ref(
                storage,
                "images/" + photo2?.name + a.toString().slice(2, 10)
              );
              const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
              counter2ImageUrl = await getDownloadURL(titleSnapshot2.ref);
            } else {
              counter2ImageUrl = undefined;
            }
            if (video1) {
              const videosRef1 = ref(storage, "videos/" + video1?.name);
              const titleVideos1 = await uploadBytes(videosRef1, video1);
              videoUrl1 = await getDownloadURL(titleVideos1.ref);
            } else {
              videoUrl1 = undefined;
            }
            if (video2) {
              const videosRef2 = ref(storage, "videos/" + video2?.name);
              const titleVideos2 = await uploadBytes(videosRef2, video2);
              videoUrl2 = await getDownloadURL(titleVideos2.ref);
            } else {
              videoUrl2 = undefined;
            }
            if (video3) {
              const videosRef3 = ref(storage, "videos/" + video3?.name);
              const titleVideos3 = await uploadBytes(videosRef3, video3);
              videoUrl3 = await getDownloadURL(titleVideos3.ref);
            } else {
              videoUrl3 = undefined;
            }
            const docsId = docs.id;
            const docRef = doc(db, "contents", docsId);
            await updateDoc(docRef, {
              content: {
                sec: sec || chooseContent.sec,
                switch: chooseContent.switch,
                // sec: sec,
                text: text ? text : chooseContent.text,
                // text: text,
                mainSlider:
                  mainBannerUrlList.length > 0
                    ? mainBannerUrlList
                    : chooseContent.mainSlider,
                // mainSlider: mainBannerUrlList,
                ourDepartmentSlider:
                  ourDepartmentUrlList.length > 0
                    ? ourDepartmentUrlList
                    : chooseContent.ourDepartmentSlider,
                // ourDepartmentSlider: ourDepartmentUrlList,
                ramazanSlider: {
                  ramazanSlider:
                    ramazanUrlList.length > 0
                      ? ramazanUrlList
                      : chooseContent.ramazanSlider.ramazanSlider,
                  switch: chooseContent.ramazanSlider.switch,
                },
                // ramazanSlider: ramazanUrlList,

                zakatSlider: {
                  zakatSlider:
                    zakatUrlList.length > 0
                      ? zakatUrlList
                      : chooseContent.zakatSlider.zakatSlider,
                  switch: chooseContent.zakatSlider.switch,
                },
                // foodboxSlider: foodBoxUrlList || chooseContent.foodboxSlider,
                // foodboxSlider: foodBoxUrlList,
                foodboxSlider: {
                  foodboxSlider:
                    foodBoxUrlList.length > 0
                      ? foodBoxUrlList
                      : chooseContent.foodboxSlider.foodboxSlider,
                  switch: chooseContent.foodboxSlider.switch,
                },
                // winterSlider: winterUrlList || chooseContent.winterSlider,
                // winterSlider: winterUrlList,
                winterSlider: {
                  winterSlider:
                    winterUrlList.length > 0
                      ? winterUrlList
                      : chooseContent.winterSlider.winterSlider,
                  switch: chooseContent.winterSlider.switch,
                },
                // palestineSlider:
                //   palestineUrlList || chooseContent.palestineSlider,
                // palestineSlider: palestineUrlList,
                palestineSlider: {
                  palestineSlider:
                    palestineUrlList.length > 0
                      ? palestineUrlList
                      : chooseContent.palestineSlider.palestineSlider,
                  switch: chooseContent.palestineSlider.switch,
                },
                // orphanSlider: orphanUrlList || chooseContent.orphanSlider,
                // orphanSlider: orphanUrlList,
                orphanSlider: {
                  orphanSlider:
                    orphanUrlList.length > 0
                      ? orphanUrlList
                      : chooseContent.orphanSlider.orphanSlider,
                  switch: chooseContent.orphanSlider.switch,
                },
                // handPumpSlider: handPumpUrlList || chooseContent.handPumpSlider,
                // handPumpSlider: handPumpUrlList,
                handPumpSlider: {
                  handPumpSlider:
                    handPumpUrlList.length > 0
                      ? handPumpUrlList
                      : chooseContent.handPumpSlider.handPumpSlider,
                  switch: chooseContent.handPumpSlider.switch,
                },
                // waterWellSlider: waterUrlList || chooseContent.waterWellSlider,
                // waterWellSlider: waterUrlList,
                waterWellSlider: {
                  waterWellSlider:
                    waterUrlList.length > 0
                      ? waterUrlList
                      : chooseContent.waterWellSlider.waterWellSlider,
                  switch: chooseContent.waterWellSlider.switch,
                },
                // masjidSlider: masjidUrlList || chooseContent.masjidSlider,
                // masjidSlider: masjidUrlList,
                masjidSlider: {
                  masjidSlider:
                    masjidUrlList.length > 0
                      ? masjidUrlList
                      : chooseContent.masjidSlider.masjidSlider,
                  switch: chooseContent.masjidSlider.switch,
                },
                achievementSlider:
                  achievementUrlList.length > 0
                    ? achievementUrlList
                    : chooseContent.achievementSlider,
                // achievementSlider: achievementUrlList,

                gallerySlider:
                  galleryUrlList.length > 0
                    ? galleryUrlList
                    : chooseContent.gallerySlider,
                // gallerySlider: galleryUrlList,

                newVideos:
                  videoUrl1 && videoUrl2 && videoUrl3
                    ? [videoUrl1, videoUrl2, videoUrl3]
                    : chooseContent.newVideos,
                // newVideos: [videoUrl1, videoUrl2, videoUrl3],
                newsVideoSlider:
                  newsVideoUrlList.length > 0
                    ? newsVideoUrlList
                    : chooseContent.newsVideoSlider,
                // newsVideoSlider: newsVideoUrlList,
                counters:  [
                  {
                    counter1Text: counter1Text
                      ? counter1Text
                      : chooseContent.counters[0].counter1Text,
                    counter1: counter1
                      ? counter1
                      : chooseContent.counters[0].counter1,
                    counter1ImageUrl: counter1ImageUrl
                      ? counter1ImageUrl
                      : chooseContent.counters[0].counter1ImageUrl,
                  },
                  {
                    counter2Text: counter2Text
                      ? counter2Text
                      : chooseContent.counters[1].counter2Text,
                    counter2: counter2
                      ? counter2
                      : chooseContent.counters[1].counter2,
                    counter2ImageUrl: counter2ImageUrl
                      ? counter2ImageUrl
                      : chooseContent.counters[1].counter2ImageUrl,
                  },
                ],
                // counters: [
                //   { counter1Text, counter1, counter1ImageUrl },
                //   { counter2Text, counter2, counter2ImageUrl },
                // ],
              },
            });
            router.refresh()
          }
        }
      });
    }
  };
  // end update code

  // create code for Main Page
  // const createHandler = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const newCollectionRef = collection(db, "contents");
  //     const newDocRef = doc(newCollectionRef);
  //     const storageRef1 = ref(storage, "images/" + photo1?.name);
  //     const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
  //     const counter1ImageUrl = await getDownloadURL(titleSnapshot1.ref);
  //     const storageRef2 = ref(storage, "images/" + photo2?.name);
  //     const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
  //     const counter2ImageUrl = await getDownloadURL(titleSnapshot2.ref);
  //     const videosRef1 = ref(storage, "videos/" + video1?.name);
  //     const titleVideos1 = await uploadBytes(videosRef1, video1);
  //     const videoUrl1 = await getDownloadURL(titleVideos1.ref);
  //     const videosRef2 = ref(storage, "videos/" + video2?.name);
  //     const titleVideos2 = await uploadBytes(videosRef2, video2);
  //     const videoUrl2 = await getDownloadURL(titleVideos2.ref);
  //     const videosRef3 = ref(storage, "videos/" + video3?.name);
  //     const titleVideos3 = await uploadBytes(videosRef3, video3);
  //     const videoUrl3 = await getDownloadURL(titleVideos3.ref);
  //     const mainSection = {
  //       content: {
  //         sec: sec,
  //         text: text,
  //         mainSlider: mainBannerUrlList,
  //         ourDepartmentSlider: ourDepartmentUrlList,
  //         ramazanSlider: ramazanUrlList,
  //         zakatSlider: zakatUrlList,
  //         foodboxSlider: foodBoxUrlList,
  //         winterSlider: winterUrlList,
  //         palestineSlider: palestineUrlList,
  //         orphanSlider: orphanUrlList,
  //         handPumpSlider: handPumpUrlList,
  //         waterWellSlider: waterUrlList,
  //         masjidSlider: masjidUrlList,
  //         achievementSlider: achievementUrlList,
  //         gallerySlider: galleryUrlList,
  //         newVideos: [videoUrl1, videoUrl2, videoUrl3],
  //         newsVideoSlider: newsVideoUrlList,
  //         counters: [
  //           { counter1Text, counter1, counter1ImageUrl },
  //           { counter2Text, counter2, counter2ImageUrl },
  //         ],
  //       },
  //     };

  //     await setDoc(newDocRef, mainSection, { merge: true });
  //     if (mainSection !== undefined) {
  //       console.log("Ok ki report hai bahi");
  //     }
  //   } catch (error) {
  //     console.error("Roko bahi firebaser error arha hai--->", error);
  //   }
  // };
  //   console.log("photo---->", photo1);
  // };

  // create code for main Page Section
  // try {
  //   const newCollectionRef = collection(db, "contents");
  //   const newDocRef = doc(newCollectionRef);
  //   const storageRef1 = ref(storage, "images/" + photo1?.name);
  //   const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
  //   const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
  //   const storageRef2 = ref(storage, "images/" + photo2?.name);
  //   const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
  //   const titleImageUrl2 = await getDownloadURL(titleSnapshot2.ref);
  //   const videosRef1 = ref(storage, "videos/" + video1?.name);
  //   const titleVideos1 = await uploadBytes(videosRef1, video1);
  //   const videoUrl1 = await getDownloadURL(titleVideos1.ref);
  //   const videosRef2 = ref(storage, "videos/" + video2?.name);
  //   const titleVideos2 = await uploadBytes(videosRef2, video2);
  //   const videoUrl2 = await getDownloadURL(titleVideos2.ref);
  //   const videosRef3 = ref(storage, "videos/" + video3?.name);
  //   const titleVideos3 = await uploadBytes(videosRef3, video3);
  //   const videoUrl3 = await getDownloadURL(titleVideos3.ref);
  //   const mainSection = {
  //     content: {
  //       sec,
  //       text,
  //       newsVideos: newsVideoUrlList,
  //       newsVideo: [videoUrl1, videoUrl2, videoUrl3],
  //       mainBannerSlider: mainBannerUrlList,
  //       ourDepartmentSlider: ourDepartmentUrlList,
  //       achievement: achievementUrlList,
  //       ramazan: ramazanUrlList,
  //       zakat: zakatUrlList,
  //       foobox: foodBoxUrlList,
  //       winter: winterUrlList,
  //       palestine: palestineUrlList,
  //       orphan: orphanUrlList,
  //       handPump: handPumpUrlList,
  //       waterWell: waterUrlList,
  //       masjid: masjidUrlList,
  //     },
  //   };

  //   await setDoc(newDocRef, mainSection, { merge: true });
  //   if (mainSection !== undefined) {
  //     console.log("Ok ki report hai bahi");
  //   }
  // } catch (error) {
  //   console.error("Roko bahi firebaser error arha hai--->", error);
  // }

  // create code for Donation Sections
  // try {
  //   const newCollectionRef = collection(db, "contents");
  //   const newDocRef = doc(newCollectionRef);
  //   const storageRef1 = ref(storage, "images/" + photo1?.name);
  //   const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
  //   const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
  //   const mainSection = {
  //     content: {
  //       sec,
  //       text,
  //       photo: titleImageUrl1,
  //     },
  //   };

  //   await setDoc(newDocRef, mainSection, { merge: true });
  //   if (mainSection !== undefined) {
  //     console.log("Ok ki report hai bahi");
  //   }
  // } catch (error) {
  //   console.error("Roko bahi firebaser error arha hai--->", error);
  // }

  const bannerPhotoHandler = (e: any) => {
    const bannerFile = e.target.files[0];
    setBannerPhoto(bannerFile);
  };
  const heroPhotoHandler = (e: any) => {
    const heroFile = e.target.files[0];
    setHeroPhoto(heroFile);
  };
  const photoHandler = (e: any) => {
    const file1 = e.target.files[0];
    setPhoto1(file1);
    const file2 = e.target.files[1];
    setPhoto2(file2);
    console.log("file1,file2", file1, file2);
  };

  const sliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploading1(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        if (mainSection === "Main Page") {
          setMainBannerUrlList((prev: any) => [...prev, downloadURL]);
        } else {
          setUrlList((prev: any) => [...prev, downloadURL]);
        }
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploading1(false);
  };

  // For Main page
  const counter1PhotoHandler = (e: any) => {
    const file1 = e.target.files[0];
    setPhoto1(file1);
  };
  const counter2PhotoHandler = (e: any) => {
    const file2 = e.target.files[0];
    setPhoto2(file2);
  };
  const ourDepartmentSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingOurDepartmentSlider(true);

    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setOurDepartmentUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingOurDepartmentSlider(false);
  };
  const ramzanSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingRamzanSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setRamazanUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingRamzanSlider(false);
  };
  const zakatSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingZakatSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setZakatUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingZakatSlider(false);
  };
  const foodBoxSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingFoodBoxSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setFoodBoxUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingFoodBoxSlider(false);
  };
  const winterSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingWinterSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setWinterUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingWinterSlider(false);
  };
  const palestineSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingPalestineSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setPalestineUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingPalestineSlider(false);
  };
  const orphanSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingOrphanSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setOrphanUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingOrphanSlider(false);
  };
  const handPumpSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingHandPumpSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setHandPumpUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingHandPumpSlider(false);
  };
  const waterWellSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingWaterWellSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setWaterUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingWaterWellSlider(false);
  };
  const masjidSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingMasjidSlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setMasjidUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingMasjidSlider(false);
  };
  const gallerySliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingGallerySlider(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setGalleryUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingGallerySlider(false);
  };
  const sliderVideosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingVideosSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `videos/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setnewsVideoUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingVideosSlider(false);
  };
  const achievementPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingAchievementImages(true);
    for (const file of files) {
      let a = Math.random();
      const storageRef = ref(
        storage,
        `images/slider/${file.name}${a.toString().slice(2, 10)}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setAchievementUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingAchievementImages(false);
  };
  const videoHandler = (e: any) => {
    const file1 = e.target.files[0];
    setVideo1(file1);
    const file2 = e.target.files[1];
    setVideo2(file2);
    const file3 = e.target.files[2];
    setVideo3(file3);
    console.log("file1,file2", file1, file2, file3);
  };
  const hideHandler = async (data: any) => {
    const dataRef = collection(db, "contents");
    const querySnapshot = await getDocs(dataRef);
    querySnapshot.forEach(async (docs) => {
      const docsData = docs.data();
      const chooseSec = docsData.content.sec;
      if (chooseSec === data) {
        const docsId = docs.id;
        const docRef = doc(db, "contents", docsId);
        const updatedContent = {
          ...docsData.content,
          switch: docsData.content.switch === "false" ? "true" : "false",
        };
        await updateDoc(docRef, {
          content: updatedContent,
        });
      }
    });
  };
  const deleteHandler = async (data: any) => {
    const dataRef = collection(db, "contents");
    const querySnapshot = await getDocs(dataRef);

    querySnapshot.forEach(async (docs) => {
      const docsData = docs.data();
      const chooseSec = docsData.content.sec;

      if (chooseSec === data) {
        const docsId = docs.id;
        const docRef = doc(db, "contents", docsId);

        // Delete the document
        await deleteDoc(docRef);
      }
    });
  };
  const allData = data.filter(
    (title: any) => "Main Page" === title.content.sec
  );
  const content = allData[0]?.content;
  const foodboxSlider = allData[0]?.content?.foodboxSlider?.foodboxSlider;

  const hideHandler1 = async (switcherSlider: any) => {
    const dataRef = collection(db, "contents");
    const querySnapshot = await getDocs(dataRef);
    querySnapshot.forEach(async (docs) => {
      const docsData = docs.data();
      const chooseSec = docsData.content.sec;
      if (chooseSec === "Main Page") {
        const docsId = docs.id;
        const docRef = doc(db, "contents", docsId);
        if (switcherSlider === "foodboxSlider") {
          const foodboxSlider = docsData.content.foodboxSlider.foodboxSlider;
          const updatedContent = {
            ...docsData.content,
            foodboxSlider: {
              foodboxSlider,
              switch:
                docsData.content.foodboxSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "handPumpSlider") {
          const handPumpSlider = docsData.content.handPumpSlider.handPumpSlider;
          const updatedContent = {
            ...docsData.content,
            handPumpSlider: {
              handPumpSlider,
              switch:
                docsData.content.handPumpSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "masjidSlider") {
          const masjidSlider = docsData.content.masjidSlider.masjidSlider;
          const updatedContent = {
            ...docsData.content,
            masjidSlider: {
              masjidSlider,
              switch:
                docsData.content.masjidSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "orphanSlider") {
          const orphanSlider = docsData.content.orphanSlider.orphanSlider;
          const updatedContent = {
            ...docsData.content,
            orphanSlider: {
              orphanSlider,
              switch:
                docsData.content.orphanSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "palestineSlider") {
          const palestineSlider =
            docsData.content.palestineSlider.palestineSlider;
          const updatedContent = {
            ...docsData.content,
            palestineSlider: {
              palestineSlider,
              switch:
                docsData.content.palestineSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "ramazanSlider") {
          const ramazanSlider = docsData.content.ramazanSlider.ramazanSlider;
          const updatedContent = {
            ...docsData.content,
            ramazanSlider: {
              ramazanSlider,
              switch:
                docsData.content.ramazanSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "waterWellSlider") {
          const waterWellSlider =
            docsData.content.waterWellSlider.waterWellSlider;
          const updatedContent = {
            ...docsData.content,
            waterWellSlider: {
              waterWellSlider,
              switch:
                docsData.content.waterWellSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "winterSlider") {
          const winterSlider = docsData.content.winterSlider.winterSlider;
          const updatedContent = {
            ...docsData.content,
            winterSlider: {
              winterSlider,
              switch:
                docsData.content.winterSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
        if (switcherSlider === "zakatSlider") {
          const zakatSlider = docsData.content.zakatSlider.zakatSlider;
          const updatedContent = {
            ...docsData.content,
            zakatSlider: {
              zakatSlider,
              switch:
                docsData.content.zakatSlider.switch === "false"
                  ? "true"
                  : "false",
            },
          };
          await updateDoc(docRef, {
            content: updatedContent,
          });
        }
      }
    });
  };

  const deleteHandler1 = async (data: any) => {
    const dataRef = collection(db, "contents");
    const querySnapshot = await getDocs(dataRef);

    querySnapshot.forEach(async (docs) => {
      const docsData = docs.data();
      const chooseSec = docsData.content.sec;

      if (chooseSec === data) {
        const docsId = docs.id;
        const docRef = doc(db, "contents", docsId);

        // Delete the document
        await deleteDoc(docRef);
      }
    });
  };
  const [backendImages, setBackendImages] = useState<any>(null);
  const [backendVideos, setBackendVideos] = useState<any>(null);
  const [backendSliderImages, setBackendSliderImages] = useState<any>([]);
  const [backendMainPageSliderImages, setBackendMainPageSliderImages] =
    useState<any>([]);
  const [
    backendMainPageOurDepartmentSliderImages,
    setBackendMainPageOurDepartmentSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageRamdanSliderImages,
    setBackendMainPageRamdanSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageZakatSliderImages,
    setBackendMainPageZakatSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageFoodBoxSliderImages,
    setBackendMainPageFoodBoxSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageWinterSliderImages,
    setBackendMainPageWinterSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPagePalestineSliderImages,
    setBackendMainPagePalestineSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageOrphanSliderImages,
    setBackendMainPageOrphanSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageHandPumpSliderImages,
    setBackendMainPageHandPumpSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageWaterWellSliderImages,
    setBackendMainPageWaterWellSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageMasjidSliderImages,
    setBackendMainPageMasjidSliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageAchievementImages,
    setBackendMainPageAchievementImages,
  ] = useState<any>([]);
  const [
    backendMainPageCounters,
    setBackendMainPageCounters,
  ] = useState<any>([]);
  const [
    counter1MainPageBackendImage,
    setCounter1MainPageBackendImage,
  ] = useState<any>([]);
  const [
    counter2MainPageBackendImage,
    setCounter2MainPageBackendImage,
  ] = useState<any>([]);
  const [
    backendMainPageGallerySliderImages,
    setBackendMainPageGallerySliderImages,
  ] = useState<any>([]);
  const [
    backendMainPageNewsVideos,
    setBackendMainPageNewsVideos,
  ] = useState<any>([]);
  const [
    backendMainPageNewsSliderVideos,
    setBackendMainPageNewsSliderVideos,
  ] = useState<any>([]);
  const filterDataBySection = (e: any) => {
    const allData = data.filter((title: any) => e === title.content.sec);
    setText(allData[0]?.content?.text);
    if (allData[0]?.content.mainSec === "Donation") {
      setBackendImages([allData[0]?.content?.photo]);
    } else if (allData[0]?.content.mainSec === "Appeals") {
      setBackendImages(allData[0]?.content?.photo);
      setBackendVideos(allData[0]?.content?.video);
      setBackendSliderImages(allData[0]?.content?.slider);
    } else if (allData[0]?.content?.sec === "Main Page") {
      setBackendMainPageSliderImages(allData[0]?.content?.mainSlider);
      setBackendMainPageOurDepartmentSliderImages(
        allData[0]?.content?.ourDepartmentSlider
      );
      setBackendMainPageRamdanSliderImages(
        allData[0]?.content?.ramazanSlider?.ramazanSlider
      );
      setBackendMainPageZakatSliderImages(
        allData[0]?.content?.zakatSlider?.zakatSlider
      );
      setBackendMainPageFoodBoxSliderImages(
        allData[0]?.content?.foodboxSlider?.foodboxSlider
      );
      setBackendMainPageWinterSliderImages(
        allData[0]?.content?.winterSlider?.winterSlider
      );
      setBackendMainPagePalestineSliderImages(
        allData[0]?.content?.palestineSlider?.palestineSlider
      );
      setBackendMainPageOrphanSliderImages(
        allData[0]?.content?.orphanSlider?.orphanSlider
      );
      setBackendMainPageHandPumpSliderImages(
        allData[0]?.content?.handPumpSlider?.handPumpSlider
      );
      setBackendMainPageWaterWellSliderImages(
        allData[0]?.content?.waterWellSlider?.waterWellSlider
      );
      setBackendMainPageMasjidSliderImages(
        allData[0]?.content?.masjidSlider?.masjidSlider
      );
      setBackendMainPageAchievementImages(
        allData[0]?.content?.achievementSlider
      );
      setBackendMainPageGallerySliderImages(
        allData[0]?.content?.gallerySlider
      );
      setBackendMainPageNewsVideos(
        allData[0]?.content?.newVideos
      );
      setBackendMainPageNewsSliderVideos(allData[0]?.content?.newsVideoSlider);
      setBackendMainPageCounters(
        allData[0]?.content?.counters
      );
      setCounter1Text(allData[0]?.content?.counters?.[0]?.counter1Text)
      setCounter1(allData[0]?.content?.counters?.[0]?.counter1)
      setCounter2Text(allData[0]?.content?.counters?.[1]?.counter2Text)
      setCounter2(allData[0]?.content?.counters?.[1]?.counter2)
      setCounter1MainPageBackendImage(allData[0]?.content?.counters?.[0]?.counter1ImageUrl)
      setCounter2MainPageBackendImage(allData[0]?.content?.counters?.[1]?.counter2ImageUrl)
    } else if(allData[0]?.content.mainSec === "Our Department"){
      setBackendImages([allData[0]?.content?.bannerImg]);
      setBackendImages((prev:any) => [...prev,allData[0]?.content?.heroSecImg]);
      setBackendVideos([allData[0]?.content?.video])
      setBackendSliderImages(allData[0]?.content?.slider);
    }

    console.log(
      "allData-->",
      allData
    );
  };
  let backSlider = backendSliderImages?.length > 0 && (
    <div className="gap-2 flex flex-wrap">
      {backendSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-44 h-32" />
      ))}
    </div>
  );
  let backMainPageSlider = backendMainPageSliderImages?.length > 0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-72 h-44" />
      ))}
    </div>
  );
  let backMainPageOurDepartmentSlider =
    backendMainPageOurDepartmentSliderImages?.length > 0 && (
      <div className="gap-2 flex flex-wrap">
        {backendMainPageOurDepartmentSliderImages?.map((d: any) => (
          <img key={d} src={d} className="w-32 h-28" />
        ))}
      </div>
    );
  let backMainPageRamdanSlider = backendMainPageRamdanSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageRamdanSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageZakatSlider = backendMainPageZakatSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageZakatSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageFoodBoxSlider = backendMainPageFoodBoxSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageFoodBoxSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageWinterSlider = backendMainPageWinterSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageWinterSliderImages?.map((d: any) => (
        <img key={d} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPagePalestineSlider = backendMainPagePalestineSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPagePalestineSliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageOrphanSlider = backendMainPageOrphanSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageOrphanSliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
    )
  let backMainPageHandPumpSlider = backendMainPageHandPumpSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageHandPumpSliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageWaterWellSlider = backendMainPageWaterWellSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageWaterWellSliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageMasjidSlider = backendMainPageMasjidSliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageMasjidSliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageAchievementImages = backendMainPageAchievementImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageAchievementImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-72" />
      ))}
    </div>
  );
  let backMainPageGallerySlider = backendMainPageGallerySliderImages?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageGallerySliderImages?.map((d: any,index:any) => (
        <img key={index} src={d} className="w-60 h-44" />
      ))}
    </div>
  );
  let backMainPageNewsVideos = backendMainPageNewsVideos?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageNewsVideos?.map((d: any,index:any) => (

          <video
          key={index}
                        className="w-60 h-52 object-fill outline-none"
                        controls
                      >
                        <source src={d} type="video/webm" />
                      </video>
      ))}
    </div>
  );
  let backMainPageNewsSliderVideos = backendMainPageNewsSliderVideos?.length >
    0 && (
    <div className="gap-2 flex flex-wrap">
      {backendMainPageNewsSliderVideos?.map((d: any,index:any) => (

          <video
          key={index}
                        className="w-60 h-52 object-fill outline-none"
                        controls
                      >
                        <source src={d} type="video/webm" />
                      </video>
      ))}
    </div>
  );
  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {mainSection} {midSection && "/"} {midSection} {childSection && "/"}{" "}
            {childSection}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This Contents will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 gap-x-6 gap-y-8">
            {mainSection !== "Hide Page" && (
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Section
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    onChange={(e: any) => {
                      setSec(e.target.value),
                        filterDataBySection(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {midSection === "Disaster Management" ? (
                      disasterManagementLst.map((i, index) => (
                        <option key={index}>{i}</option>
                      ))
                    ) : midSection === "Health Care" ? (
                      healthCareLst.map((i, index) => (
                        <option key={index}>{i}</option>
                      ))
                    ) : midSection === "Environment Department" ? (
                      environmentDepartmentLst.map((i, index) => (
                        <option key={index}>{i}</option>
                      ))
                    ) : midSection === "New Page" ? (
                      mainSectionList.map((i, index) => (
                        <option key={index}>{i}</option>
                      ))
                    ) : midSection === "Water Project" || midSection === "Orphan" || midSection === "Education & Skills" || midSection === "Masjid" ? (
                      <>
                        <option>Select Section</option>
                        <option>{midSection}</option>
                      </>
                    ):  <>
                        <option>Select Section</option>
                        <option>{childSection}</option>
                      </>}
                  </select>
                </div>
              </div>
            )}
            {/* toggle */}
            {midSection === "Hide Page" &&
              mainSection === "Hide Page" &&
              childSection === "Hide Page" && (
                <>
                  {midSection === "Hide Page" && data && (
                    <div className="flex justify-between md:grid grid-cols-4 p-2 py-3 border border-teal-300">
                      <span className="font-bold col-span-3">Pages</span>

                      <div className="flex justify-between items-center gap-2 md:gap-0">
                        <span className="font-bold">Delete</span>
                        <span className="text-xs md:text-sm">Hide/Show</span>
                      </div>
                    </div>
                  )}
                  {midSection === "Hide Page" && switchPageArr
                    ? stateArrayPages.map((i: any, index: any) => (
                        <div
                          key={index}
                          className="flex justify-between border-teal-400 border  items-center"
                        >
                          <p className="p-2 text-sm md:text-base text-teal-500 md:font-semibold">
                            {i.content.sec}
                          </p>
                          <div className="flex gap-3 md:gap-8 items-center">
                            <button
                              type="button"
                              onClick={() => deleteHandler(i.content.sec)}
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-1  md:py-2.5 text-center me-2 my-2"
                            >
                              Delete Page
                            </button>
                            <div className="pr-2 md:pr-5">
                              <label className="inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={i.content.switch === "true"}
                                  value=""
                                  className="sr-only peer"
                                  onChange={() => {
                                    handleToggleChangePage(index);
                                    hideHandler(i.content.sec);
                                  }}
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      ))
                    : data.map((i: any, index: any) => (
                        <div
                          key={index}
                          className="flex justify-between border-teal-400 border  items-center"
                        >
                          <p className="p-2 text-sm md:text-base text-teal-500 md:font-semibold">
                            {i.content.sec}
                          </p>
                          <div className="flex gap-3 md:gap-8 items-center">
                            <button
                              type="button"
                              onClick={() => deleteHandler(i.content.sec)}
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-1  md:py-2.5 text-center me-2 my-2"
                            >
                              Delete Page
                            </button>
                            <div className="pr-2 md:pr-5">
                              <label className="inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={
                                    i.content.switch === "true" ? true : false
                                  }
                                  value=""
                                  className="sr-only peer"
                                  onChange={() => {
                                    handleToggleChangePage1(index);
                                    setSwitchPageArr(true);
                                    hideHandler(i.content.sec);
                                  }}
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
                </>
              )}
            {mainSection === "New Page" && (
              <div className="col-span-full py-2">
                <label
                  htmlFor="myInput"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Section Name
                </label>
                <div className="mt-2">
                  <input
                    id="myInput"
                    name="myInput"
                    value={sectionName}
                    onChange={(e: any) => setSectionName(e.target.value)}
                    className="block w-2/4 rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Type Section Name here ..."
                  />
                </div>
              </div>
            )}
            {mainSection !== "Hide Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contents
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    value={text}
                    onChange={(e: any) => setText(e.target.value)}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    // defaultValue={""}
                  />
                </div>
              </div>
            )}
            {/* Banner photos */}
            {(mainSection === "Our Department" || sec === "Our Department") && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Banner photo
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                   <div className="flex justify-center gap-4">
                      {backendImages?.[0] && (
                        <img src={backendImages[0]} className="w-[80%] h-60" />
                      )}
                     
                    </div>
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col  justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="banner-file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="banner-file"
                          name="banner-file"
                          type="file"
                          onChange={bannerPhotoHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* heroSec photos */}
            {(mainSection === "Our Department" || sec === "Our Department") && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hero Section photo
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                   <div className="flex justify-center gap-4">
                      {backendImages?.[1] && (
                        <img src={backendImages[1]} className="w-[70%] h-60" />
                      )}
                     
                    </div>
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col  justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="hero-file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="hero-file"
                          name="hero-file"
                          type="file"
                          onChange={heroPhotoHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Header photos */}
            {mainSection !== "Our Department" &&
              mainSection !== "Main Page" &&
              sec !== "Our Department" &&
              mainSection !== "Hide Page" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {sec === "Donation" || mainSection === "Our Department"
                      ? "Photo Main"
                      : "Header Photos"}
                  </label>
                  <div className="mt-2 flex-col gap-4 justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="flex justify-center gap-4">
                      {backendImages?.[0] && (
                        <img src={backendImages[0]} className="w-60 h-52" />
                      )}
                      {backendImages?.[1] && (
                        <img src={backendImages[1]} className="w-60 h-52" />
                      )}
                    </div>
                    <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple
                              onChange={photoHandler}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {/* Down Videos photos */}
            {midSection === "Disaster Management" ||
              midSection === "Health Care" ||
              (midSection === "Environment Department" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload Two Images Down to Video
                  </label>
                  <div className="mt-2 flex-col gap-4  justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            multiple
                            onChange={photoHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* Videos */}
            {mainSection !== "Donations" &&
              mainSection !== "Main Page" &&
              sec !== "Donation" &&
              mainSection !== "Hide Page" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {mainSection === "Our Department" ||
                    sec === "Our Department"
                      ? `Video`
                      : "Videos"}
                  </label>
                  <div className="mt-2 gap-4 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="flex justify-center gap-4">
                      {backendVideos?.[0] && (
                        <video
                          className="w-1/2 h-60 object-fill outline-none"
                          controls
                        >
                          <source src={backendVideos?.[0]} type="video/webm" />
                        </video>
                      )}
                      {backendVideos?.[1] && (
                        <video
                          className="w-1/2 h-60 object-fill outline-none"
                          controls
                        >
                          <source src={backendVideos?.[1]} type="video/webm" />
                        </video>
                      )}
                    </div>
                    <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="flex-col justify-center items-center">
                        <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                          
                          <label
                            htmlFor="file-upload1"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload1"
                              name="file-upload1"
                              type="file"
                              multiple
                              accept="video/*"
                              onChange={videoHandler}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          mp3, webm up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {/* Slider Photos */}
            {mainSection !== "Donations" &&
              mainSection !== "Main Page" &&
              sec !== "Donation" &&
              mainSection !== "Hide Page" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Slider photos
                  </label>
                  <div className="mt-2 gap-4 flex-col flex-wrap justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    {backSlider && backSlider}
                    <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                        <div className="flex justify-center gap-1">
                          <label
                            htmlFor="file-upload2"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>

                            <input
                              id="file-upload2"
                              name="file-upload2"
                              type="file"
                              multiple
                              onChange={sliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        {!uploading1 ? (
                          <>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </>
                        ) : (
                          <div className="flex flex-wrap gap-5">
                            <PropagateLoader
                              color={"#36d7b7"}
                              loading={uploading1}
                              size={20}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                            <p className="text-teal-500">
                              uploading1 Images ...
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {/* Main Page */}
            {/* banner Slider images */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="main-banner-slider"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Main Banner Slider photos
                </label>
                <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="">{backMainPageSlider}</div>
                  <div className="text-center w-1/2 mx-auto  mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                     <div className="flex justify-center gap-1">

                      <label
                        htmlFor="main-banner-slider"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="main-banner-slider"
                          name="main-banner-slider"
                          type="file"
                          multiple
                          onChange={sliderPhotosHandler}
                          className="sr-only"
                        />                          
                        </label>
                     <p className="pl-1">or drag and drop</p>
                     </div>
                      {!uploading1 ? (
                        <>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploading1}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading1 Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* our department slider images */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  // htmlFor="our-department"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Our Department Slider photos
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {backMainPageOurDepartmentSlider}
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                     <div className="flex justify-center gap-1">


                      <label
                        htmlFor="our-department"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="our-department"
                          name="our-department"
                          type="file"
                          multiple
                          onChange={ourDepartmentSliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                       <p className="pl-1">or drag and drop</p>
                      </div>
                      {!uploadingOurDepartmentSlider ? (
                        <>
                         
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingOurDepartmentSlider}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading1 Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* appeal sliders */}
            {mainSection === "Main Page" && (
              <h2 className="block text-base py-3 font-medium leading-6 text-gray-900">
                Appeals Sliders
              </h2>
            )}
            <div className="grid grid-cols-1  gap-3">
              {/* ramazan slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="ramazan-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ramadan Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageRamdanSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                          <div className="flex justify-center gap-1">

                          <label
                            htmlFor="ramazan-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="ramazan-slider"
                              name="ramazan-slider"
                              type="file"
                              multiple
                              onChange={ramzanSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                              <p className="pl-1">or drag and drop</p>
                          </div>
                          {!uploadingRamzanSlider ? (
                            <>
                          
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingRamzanSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* zakat slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="zakat-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Zakat Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageZakatSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div className="flex justify-center gap-1">

                          <label
                            htmlFor="zakat-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="zakat-slider"
                              name="zakat-slider"
                              type="file"
                              multiple
                              onChange={zakatSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                                 <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingZakatSlider ? (
                            <>
                       
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingZakatSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Food Box slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="foodBox-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Food Box Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageFoodBoxSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div  className="flex justify-center gap-1">

                          <label
                            htmlFor="foodBox-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="foodBox-slider"
                              name="foodBox-slider"
                              type="file"
                              multiple
                              onChange={foodBoxSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                            <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingFoodBoxSlider ? (
                            <>
                            
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingFoodBoxSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Winter  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="winter-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Winter Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageWinterSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                        <div className="flex justify-center gap-1">

                          <label
                            htmlFor="winter-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="winter-slider"
                              name="winter-slider"
                              type="file"
                              multiple
                              onChange={winterSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                          {!uploadingWinterSlider ? (
                            <>
                            
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingWinterSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* palestine  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="palestine-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Palestine Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPagePalestineSlider}
                      <div className="text-center w-1/2 mx-auto  mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div className="flex justify-center gap-1" >

                          <label
                            htmlFor="palestine-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="palestine-slider"
                              name="palestine-slider"
                              type="file"
                              multiple
                              onChange={palestineSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                           <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingPalestineSlider ? (
                            <>
                             
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingPalestineSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* orphan  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="orphan-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Orphan Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageOrphanSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div className="flex justify-center gap-1">

                          <label
                            htmlFor="orphan-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="orphan-slider"
                              name="orphan-slider"
                              type="file"
                              multiple
                              onChange={orphanSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                            <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingOrphanSlider ? (
                            <>
                            
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingOrphanSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Hand Pump slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="handpump-file"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Hand Pump Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageHandPumpSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div className="flex justify-center gap-1">

                          <label
                            htmlFor="handpump-file"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="handpump-file"
                              name="handpump-file"
                              type="file"
                              multiple
                              onChange={handPumpSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                           <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingHandPumpSlider ? (
                            <>
                             
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingHandPumpSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*Water Well slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="waterwell-file"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Water Well Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageWaterWellSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                          <div className="flex justify-center gap-1">

                          <label
                            htmlFor="waterwell-file"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="waterwell-file"
                              name="waterwell-file"
                              type="file"
                              multiple
                              onChange={waterWellSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                           <p className="pl-1">or drag and drop</p>
                          </div>
                          {!uploadingWaterWellSlider ? (
                            <>
                             
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingWaterWellSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*Masjid slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      // htmlFor="masjid-slider"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Masjid Slider photos
                    </label>
                    <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {backMainPageMasjidSlider}
                      <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                         <div className="flex justify-center gap-1">

                          <label
                            htmlFor="masjid-slider"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="masjid-slider"
                              name="masjid-slider"
                              type="file"
                              multiple
                              onChange={masjidSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                              <p className="pl-1">or drag and drop</p>
                         </div>
                          {!uploadingMasjidSlider ? (
                            <>
                          
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingMasjidSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Achievements */}
            {mainSection == "Main Page" && (
              <div className="col-span-full">
                <label
                  // htmlFor="achievement-file"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Achievements photos
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {backMainPageAchievementImages}
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                     <div className="flex gap-1 justify-center">

                      <label
                        htmlFor="achievement-file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="achievement-file"
                          name="achievement-file"
                          type="file"
                          multiple
                          onChange={achievementPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                     </div>
                      {!uploadingAchievementImages ? (
                        <>
                          
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingAchievementImages}
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500 text-sm">
                            uploading Images ...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* counter */}
            {mainSection == "Main Page" ? (
              <>
                <h2 className="pb-4">Counters</h2>
                <div className="grid grid-cols-1  md:grid-cols-2  gap-4 pb-4">
                  <div className="flex-col  w-full gap-4">
                    <div className="relative h-10 w-full min-w-[100px] ">
                      <input
                        type="text"
                        placeholder="Title"
                        value={counter1Text}
                        onChange={(e) => setCounter1Text(e.target.value)}
                        className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                    <div className="relative h-10 w-full min-w-[100px] ">
                      <input
                        type="number"
                        placeholder="Counter"
                        value={counter1}
                        onChange={(e) => setCounter1(e.target.value)}
                        className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center gap-2 items-center rounded-lg border border-dashed border-gray-900/25 px-2 py-3">
                    {counter1MainPageBackendImage && (
                      <img
                        src={counter1MainPageBackendImage}
                        className="w-36 h-28"
                      />
                    )}
                    <div className="text-center mt-4 flex-col justify-center items-center border border-green-400 p-4 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-2 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="counter1-file"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="counter1-file"
                            name="counter1-file"
                            type="file"
                            onChange={counter1PhotoHandler}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2  gap-4 pb-4">
                  <div className="flex-col  w-full gap-4">
                    <div className="relative h-10 w-full min-w-[100px] ">
                      <input
                        type="text"
                        placeholder="Title"
                        value={counter2Text}
                        onChange={(e) => setCounter2Text(e.target.value)}
                        className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                    <div className="relative h-10 w-full min-w-[100px] ">
                      <input
                        type="number"
                        placeholder="Counter"
                        value={counter2}
                        onChange={(e) => setCounter2(e.target.value)}
                        className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center gap-2 items-center rounded-lg border border-dashed border-gray-900/25 px-2 py-3">
                    {counter2MainPageBackendImage && (
                      <img
                        src={counter2MainPageBackendImage}
                        className="w-32 h-28"
                      />
                    )}
                    <div className="text-center mt-4 flex-col justify-center items-center border border-green-400 p-4 rounded-full">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-2 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="counter1-file"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="counter1-file"
                            name="counter1-file"
                            type="file"
                            onChange={counter2PhotoHandler}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {/* Gallery */}
            {mainSection == "Main Page" && (
              <div className="col-span-full">
                <label
                  // htmlFor="gallery"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gallery photos
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {backMainPageGallerySlider}
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                     <div className = "flex justify-center gap-1">

                      <label
                        htmlFor="gallery"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="gallery"
                          name="gallery"
                          type="file"
                          multiple
                          onChange={gallerySliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                          <p className="pl-1">or drag and drop</p>
                     </div>
                      {!uploadingGallerySlider ? (
                        <>
                      
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingGallerySlider}
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500 text-sm">
                            uploading Images ...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* News Videos */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  // htmlFor="news-video"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  News Videos
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {backMainPageNewsVideos}
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                      <div className="flex gap-1 justify-center">
                        <label
                          htmlFor="news-videos"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="news-videos"
                            name="news-videos"
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={videoHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>

                      <p className="text-xs leading-5 text-gray-600">
                        mp4, other up to 100MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* News Slider Videos */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  // htmlFor="slider-videos"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  News Slider Videos
                </label>
                <div className="mt-2 flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {backMainPageNewsSliderVideos}
                  <div className="text-center w-1/2 mx-auto mt-4 flex-col justify-center items-center border border-green-400 p-2 rounded-full">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex-col justify-center text-sm leading-6 text-gray-600">
                      <div className="flex justify-center gap-1">
                        <label
                          htmlFor="slider-videos"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="slider-videos"
                            name="slider-videos"
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={sliderVideosHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      {!uploadingVideosSlider ? (
                        <>
                          <p className="text-xs leading-5 text-gray-600">
                            mp4, other up to 100MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingVideosSlider}
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500 text-sm">
                            uploading Images ...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {midSection !== "Hide Page" && (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            // onClick={submitHandler()}
            onSubmit={submitHandler}
            className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loader ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-200 animate-spin fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : mainSection !== "New Page" ? (
              "Update"
            ) : (
              "Create"
            )}
          </button>
        </div>
      )}
      {midSection === "Hide Page" &&
        mainSection === "Hide Page" &&
        childSection === "Hide Page" && (
          <>
            <>
              <div className="flex items-center justify-between">
                <span className="bg-teal-600 w-2/6 h-[2px] px-2"></span>
                <p className="text-teal-500 md:font-semibold text-sm md:text-xl p-2">
                  Main Page
                </p>
                <span className="bg-teal-600 w-2/6 h-[2px] px-2"></span>
              </div>
              <div className="flex justify-between md:grid grid-cols-4 p-2 py-3 border border-teal-300">
                <span className="font-bold col-span-3">Pages</span>

                <div className="flex justify-between items-center gap-2 md:gap-0">
                  <span className="font-bold">Delete</span>
                  <span className="text-xs md:text-sm">Hide/Show</span>
                </div>
              </div>
            </>

            {mySwitch
              ? stateArray.map((i: any, index: any) => (
                  <div
                    key={index}
                    className="flex justify-between border-teal-400 border  items-center"
                  >
                    <p className="p-2 text-sm md:text-base text-teal-500 md:font-semibold">
                      {i.title}
                    </p>
                    <div className="flex gap-3 md:gap-8 items-center">
                      <button
                        type="button"
                        onClick={() => deleteHandler(i.title)}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-1  md:py-2.5 text-center me-2 my-2"
                      >
                        Delete Slider
                      </button>
                      <div className="pr-2 md:pr-5">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={i.switch === "true" && true}
                            value=""
                            className="sr-only peer"
                            onChange={() => {
                              handleToggleChange(index);
                              hideHandler1(i.title);
                            }}
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))
              : arrayAppeal.map((i: any, index: any) => (
                  <div
                    key={index}
                    className="flex justify-between border-teal-400 border  items-center"
                  >
                    <p className="p-2 text-sm md:text-base text-teal-500 md:font-semibold">
                      {i.title}
                    </p>
                    <div className="flex gap-3 md:gap-8 items-center">
                      <button
                        type="button"
                        onClick={() => deleteHandler(i.title)}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-1  md:py-2.5 text-center me-2 my-2"
                      >
                        Delete Slider
                      </button>
                      <div className="pr-2 md:pr-5">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={i.switch === "true" ? true : false}
                            value=""
                            className="sr-only peer"
                            onChange={() => {
                              handleToggleChange1(index);
                              hideHandler1(i.title);
                              setMySwitch(true);
                            }}
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
          </>
        )}
    </form>
  );
}
