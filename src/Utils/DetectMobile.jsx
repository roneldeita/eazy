//reference to the function below https://dev.to/pmca/how-to-build-a-mobile-web-share-component-with-react-in-under-10-minutes-37jh
export default function DetectMobile(){
  return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}