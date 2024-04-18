// import styles from "./home.module.css"
// import Footer from "../../components/footer/footer";
// import  Hero from "../../components/hero/hero"
// import Contact from "../../components/contact/contact";
// import Sponsors from "../../components/sponsors/sponsors";
// import SectionHeading from "../../components/sectionHeading/sectionHeading";
// import AboutUs from "../../components/aboutUs/aboutus";
// import YellowButton from "../../components/buttons/yellowButton";
// import Feautures from "../../components/features/features";
// import FAQs from "../../components/faqs/faqs";


// const Home = () => {
//     return(
//         <>
//             <div>
//                 <Hero />
//                 <div className={styles.sponsors}>
//                     <SectionHeading heading="Trusted by"/>
//                     <Sponsors >
//                         <svg width="65" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.793 15.953A16.005 16.005 0 0 1 32.82-.074a16.005 16.005 0 0 1 16.027 16.027H16.793Zm0 32.053A16.005 16.005 0 0 1 32.82 31.98a16.005 16.005 0 0 1-16.027-16.027A16.005 16.005 0 0 0 .767 31.98a16.005 16.005 0 0 0 16.026 16.027Zm0 0A16.005 16.005 0 0 0 32.82 64.034a16.005 16.005 0 0 0 16.027-16.026H16.793Zm15.92-16.026A16.005 16.005 0 0 1 48.74 48.007 16.005 16.005 0 0 0 64.767 31.98 16.005 16.005 0 0 0 48.74 15.953 16.005 16.005 0 0 1 32.713 31.98Z" fill="#007A73"/></svg>

//                         <svg width="182" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M123.596 46.262h-.043c-7.708 5.373-16.801 11.001-26.63 16.928l-.39.213c-.173.043-.216.256-.173.384.043.17.26.213.39.17.043 0 .086-.042.13-.085l.303-.17c8.357-4.264 17.926-9.338 27.539-14.583l.173-.085c-.562-.853-1.039-1.791-1.299-2.772Zm50.576-40.335C162.048-7.25 83.846 4.605 50.634 11.768l-.78.17c-.173.043-.26.171-.26.342 0 .128.13.256.303.213h.044l.78-.128c27.539-4.818 84.827-11.512 97.124.512 3.767 3.667 2.901 8.4-1.472 13.985 2.425 1.535 4.114 3.965 4.763 6.737 17.018-11.129 28.449-21.788 23.036-27.672Z" fill="#CC2427"/><path d="M128.533 42.809c.129 4.647 3.117 8.442 7.014 8.442 7.535 0 10.739-9.124 10.523-15.222-.174-4.647-3.205-8.442-7.102-8.442-6.495 0-10.695 9.082-10.435 15.222Zm-3.984-.256c-.303-7.93 6.019-16.032 15.155-16.032 6.149 0 10.133 4.05 10.349 10.19.303 8.358-5.586 16.032-15.155 16.032-6.149 0-10.133-4.008-10.349-10.19ZM37.773 40.464c-.39.17-.823.255-1.256.34l-2.858.512a4.697 4.697 0 0 0-1.992.597c-.346.214-.606.555-.65.981-.086.384.087.767.434.98a3.34 3.34 0 0 0 1.818.384c.65 0 1.3-.127 1.906-.298a4.533 4.533 0 0 0 1.559-.81c.303-.256.52-.597.649-.98a5.754 5.754 0 0 0 .39-1.706Zm7.967-4.861c-.043.725-.173 1.364-.346 2.473l-1.343 7.419c-.13.597.174 1.236.736 1.535v.298h-7.75v-1.876a18.956 18.956 0 0 1-3.724 1.535 15.274 15.274 0 0 1-3.681.47c-2.511 0-3.94-.257-4.893-1.11-.953-.852-1.516-1.449-1.472-2.686.086-.81.433-1.577.952-2.174.563-.64 1.256-1.109 2.035-1.45.996-.426 2.036-.682 3.118-.852 1.343-.214 3.248-.427 5.803-.64.866-.043 1.732-.213 2.511-.554.563-.213.736-.427.823-.853.086-.426-.087-1.194-1.126-1.407-2.771-.512-7.968.34-10.652 1.023l1.429-3.88c3.42-.554 6.885-.81 10.349-.853 5.5 0 7.274 1.578 7.231 3.582ZM68.084 47.328l2.684-14.88h7.405l-2.685 14.88h-7.404ZM71.2 29.037c.217-1.237 2.166-2.217 4.374-2.217 2.208 0 3.767.98 3.55 2.217-.216 1.236-2.165 2.217-4.373 2.217s-3.767-1.024-3.55-2.217ZM104.371 40.506l-1.256.341-2.901.512a4.513 4.513 0 0 0-1.949.597c-.346.213-.606.554-.65.938-.086.384.044.81.39 1.023.39.256.996.341 1.862.341.65 0 1.299-.085 1.905-.255a4.528 4.528 0 0 0 1.559-.81c.303-.256.52-.597.65-.981.173-.555.303-1.109.39-1.706Zm7.967-4.903c-.043.725-.173 1.407-.346 2.473l-1.343 7.462c-.13.597.173 1.236.736 1.535v.255h-7.751V45.41c-1.169.682-2.425 1.194-3.724 1.577-1.212.299-2.468.47-3.724.427-2.468 0-3.897-.256-4.893-1.109s-1.472-1.45-1.428-2.644c.086-.81.433-1.577.952-2.217.563-.597 1.256-1.108 2.035-1.407.996-.426 1.992-.725 3.075-.852 1.385-.214 3.29-.427 5.845-.64a10.189 10.189 0 0 0 2.512-.554c.52-.213.736-.427.823-.853.086-.426-.087-1.194-1.126-1.407-2.772-.555-7.968.34-10.652.98l1.429-3.837c3.42-.554 6.885-.81 10.349-.853 5.499.043 7.274 1.62 7.231 3.582ZM22.228 41.999a29.81 29.81 0 0 1-6.15.64c-3.507 0-6.321-1.706-6.148-4.904.087-2.09 2.641-6.524 9.05-6.524 2.035-.042 4.027.47 5.76 1.535l.908-5.16a17.647 17.647 0 0 0-7.274-1.193C9.93 26.478 1.833 30.23.837 37.905c-.996 7.675 8.66 9.764 12.947 9.764 2.468 0 5.066-.127 7.448-.34l.996-5.33ZM82.243 32.362l.52-3.027 7.708-1.62-.823 4.647h3.81l-.736 3.028h-3.68l-2.209 11.938h-7.49l2.25-11.938H78.78l.563-2.985 2.901-.043ZM119.829 47.328h-7.534l3.81-20.722 7.318.17-3.594 20.552ZM58.341 35.944c-.953 0-1.862.298-2.641.853a4.04 4.04 0 0 0-1.43 2.558c-.26 1.322-.13 2.217.39 2.814.607.597 1.43.896 2.295.853.65 0 1.3-.128 1.906-.384a3.511 3.511 0 0 0 1.429-1.194c.39-.597.692-1.279.822-1.961.217-1.194.044-2.047-.52-2.644-.605-.596-1.428-.938-2.251-.895ZM44.874 52.488l3.594-19.955h6.495l-.52 2.558c.694-.895 1.646-1.535 2.729-1.919 1.342-.554 2.771-.81 4.2-.852 1.689 0 2.728.085 3.984.725 1.169.596 2.122 1.577 2.598 2.814.52 1.279.65 2.686.346 4.05-.346 2.346-1.688 4.477-3.637 5.842-1.992 1.407-3.767 1.79-6.322 1.79-.78 0-1.559-.085-2.295-.255a6.138 6.138 0 0 1-1.472-.555 5.918 5.918 0 0 1-1.213-1.108l-1.212 6.865h-7.275ZM178.935 37.778c-.043-1.194-.649-2.005-1.905-2.005-3.031 0-6.235 5.842-6.798 8.187 4.936 0 8.833-2.9 8.703-6.182Zm.65 9.167.563.383c-1.472 2.942-4.46 5.33-8.011 5.33-2.901 0-5.239-1.876-5.369-5.415-.26-6.396 5.845-12.322 10.782-12.322 2.122 0 4.113.938 4.2 3.198.173 5.074-7.058 6.608-11.821 6.694-.173.597-.217 1.236-.173 1.876.086 2.132 1.385 3.88 4.027 3.88 2.641 0 4.633-1.834 5.802-3.624Z" fill="#013D5B"/><path d="m149.967 37.607 1.689-.17c.562 0 1.039.127 1.082.639.043.512-.563 2.558-.693 3.112l-1.169 4.99a155.509 155.509 0 0 1-1.386 5.883h2.945l1.645-7.93c5.11-5.202 7.059-6.908 8.228-6.908.476-.042.909.299.952.768v.17c.044.896-.563 2.985-.736 3.582l-1.732 5.756c-.346 1.322-.649 2.473-.606 3.326.043.852.823 1.833 1.949 1.833 2.165 0 3.767-2.217 5.109-4.392l-.39-.724c-.563.852-1.818 2.771-2.858 2.771-.303 0-.606-.213-.606-.725.044-.81.173-1.577.433-2.345l1.906-6.78c.476-1.875.736-3.07.736-3.709 0-.64-.823-1.833-1.949-1.833-1.948 0-4.547 1.407-10.003 7.59h-.086l.693-3.028c.389-1.663.736-3.368 1.082-4.562a45.606 45.606 0 0 1-6.279 1.748l.044.938Z" fill="#013D5B"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.75)" d="M0 0h181v64H0z"/></clipPath></defs></svg>

//                         <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59.177 41.313c5.075-15.07-2.866-31.456-17.737-36.6C26.57-.43 10.4 7.618 5.323 22.688.248 37.757 8.19 54.143 23.06 59.286 37.93 64.43 54.1 56.383 59.177 41.313Z" fill="#202843"/><path d="M8.16 47.34c4.427-2.14 19.497-9.637 22.467-11.4 2.44-1.441 6.072-3.565 6.072-3.565l1.541 3.182 2.353 15.683 1.797-1.051 1.195-21.905c3.631-2.3 6.83-4.539 10.18-6.882a738.995 738.995 0 0 1 3.77-2.625 29.057 29.057 0 0 0-1.338-2.347c-1.413.69-2.782 1.348-4.13 1.996-3.676 1.767-7.188 3.456-10.97 5.492L21.78 14.015l-1.797 1.05 12.226 9.907 1.946 2.938.003.006s-3.63 2.125-6.082 3.546C25.083 33.187 11.139 42.666 7.097 45.48c.332.634.686 1.254 1.062 1.86Z" fill="#FFC94C"/></svg>

//                         <svg width="132" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M99.25 0H33.404v63.774H99.25V0Z" fill="#fff"/><path d="M131.75 32.038 99.02 0v64l32.73-31.962ZM66.288 32.038 99.02 0H33.558l32.73 32.038ZM.75 32.038 33.558 64V0L.75 32.038ZM66.288 32.038 33.559 64h65.461L66.29 32.038Z" fill="#DB0011"/></svg>

//                         <svg width="151" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M144.457 21.338c-2.644 0-4.976 2.656-7.93 5.501-2.798 2.846-8.24 9.675-13.371 13.659 1.399-2.656 4.82-8.537 5.286-11.382.467-2.846-1.244-3.984-3.576-2.277-2.643 1.897-5.131 11.382-8.707 11.382-.622 0-1.088-.379-1.088-1.327 0-2.846 3.576-8.158 9.795-11.193.933-.38 1.399-1.328 1.399-1.897 0-.19 0-1.518-2.021-1.518-6.219 0-14.615 8.727-15.703 15.556-1.244 1.518-3.421 3.604-6.064 5.122 3.109-5.312 5.753-9.675 7.152-14.228 1.555-5.311-.622-5.88-3.11-4.363-2.332 1.518-3.887 5.691-4.664 7.209-.622 1.517-1.244 3.604-3.265 5.501-2.022 1.897-4.198 1.707-2.643-2.276 1.399-3.415 4.353-7.02 6.841-8.727.622-.379 1.088-.569 1.088-1.707 0-1.518-1.555-2.656-3.731-1.518-2.955 1.518-4.354 2.467-6.842 2.467-2.02 0-2.954-.57-3.731-1.139-1.088-.569-1.866-.379-2.332-.19-.467.19-1.089.57-1.555 1.329-.467.569-.778 1.517-.778 2.086C84.286 31.582 81.331 39.17 79 39.17c-.777 0-1.555-.19-1.4-2.466.312-3.605 3.888-8.347 4.665-9.296.778-.948 2.332-1.517 2.488-2.655.155-.949-.311-1.898-1.866-1.898-4.664 0-11.039 7.968-11.66 15.177-.778.758-1.556 1.707-2.644 1.707-2.177 0-2.799-2.466-2.643-4.363 5.753-6.26 16.636-20.298 16.947-30.352 0-2.467-.933-3.605-2.487-3.605-4.043 0-9.64 7.209-13.216 12.71-4.354 6.83-6.997 15.176-7.93 21.437-3.11 3.414-4.509 3.604-5.908 3.604-1.866 0-2.643-1.708-2.488-3.035 5.286-5.881 14.615-20.109 14.77-27.128 0-2.086-.932-3.035-2.642-3.035-3.577 0-8.863 4.743-12.594 10.813-3.732 6.26-6.064 13.469-6.841 20.109-2.8 3.035-4.82 3.604-6.53 3.604-1.09 0-1.867-.949-2.022-1.328 2.488-1.708 8.085-6.07 8.085-12.52 0-3.225-1.71-4.743-3.576-4.743-4.509 0-11.506 6.83-11.506 16.314v.949c-2.02.948-3.42 1.707-3.11 3.604.312 1.707 1.867 1.518 4.043.57.467 1.137 2.643 3.035 5.598 3.035 4.042 0 7.152-2.277 9.484-4.933 1.088 2.846 3.576 4.363 6.22 4.363 3.109 0 6.374-2.655 8.861-5.121.311 2.276 2.177 5.69 5.442 5.69 2.954 0 5.131-2.086 6.997-4.363.466 2.277 2.177 4.174 4.354 4.174 7.463 0 11.66-12.9 12.594-17.453.155-.569.621-.759.932-.569 1.4.57 2.022.949 3.887.57-2.798 2.655-5.286 7.398-5.286 10.812 0 3.415 2.332 4.932 4.198 4.932 1.71 0 4.042-1.327 5.597-3.224-.466.948-.933 2.466-1.865 3.604-1.555.569-6.22 2.656-9.33 4.742-2.798 2.087-5.597 5.502-5.597 9.296 0 2.087 1.4 4.553 4.665 4.553 5.442 0 9.329-4.364 14.46-15.746 4.353-2.276 6.841-4.173 8.551-5.88.777 1.517 2.177 2.276 3.576 2.276 2.021 0 3.421-.759 4.975-2.276-.31.758-.621 1.707-1.243 2.655-3.11 1.518-6.686 3.605-8.552 4.933-4.975 3.604-6.064 7.019-6.064 9.674 0 1.518 1.089 4.364 4.509 4.364 7.308 0 11.817-11.003 14.771-17.453 2.177-1.328 5.286-3.984 8.396-7.019-.155.38-.155.949-.155 1.518 0 2.845 2.021 5.311 5.441 5.311 6.686 0 8.707-6.07 8.707-12.52 0-2.087-.311-3.794-.311-4.553 0-1.897.467-3.035 2.022-3.035 1.554 0 2.487-.38 2.487-1.897.156-1.518-1.088-2.466-2.798-2.466ZM76.977 9.766c.156 0 .312.19.312.57 0 2.465-5.442 12.899-10.417 18.97 2.798-10.814 8.862-19.54 10.106-19.54Zm-42.756 25.99c.155-4.554 3.265-8.158 4.353-8.158.467 0 .622.38.622.949 0 1.707-1.71 5.122-4.975 7.208ZM59.564 13.56c.155 0 .31.19.31.57 0 1.896-3.886 10.623-8.861 16.693 2.643-9.864 6.84-17.263 8.551-17.263ZM86.93 58.14c-.311 0-.622-.38-.622-.759 0-2.845 5.13-6.07 7.774-7.208-1.089 2.086-5.442 7.967-7.152 7.967Zm20.368.19c-.311 0-.467-.19-.467-.76 0-2.465 4.665-6.26 7.308-7.397-1.555 2.845-5.442 8.157-6.841 8.157Zm27.675-17.832c-.311 0-.777 0-.777-1.328 0-.949-.311-2.087-1.71-2.087h-.622c2.954-2.845 5.131-5.88 7.307-7.967-.466 6.45-1.71 11.382-4.198 11.382Z" fill="#D31245"/><path d="M132.485 20.01c-.156 1.138-1.089 1.707-1.244 2.656 0 .569.311.948.933.948 1.554 0 5.597-2.845 6.063-7.398.156-2.276-.932-4.173-2.954-4.173-2.021 0-3.887 2.276-4.042 4.363-.311 1.897 1.244 2.655 1.244 3.604ZM25.669 51.88c-1.244 0-1.866-2.087-1.866-4.363 0-2.466 1.4-8.157 1.866-10.623.622-2.656.778-6.83-1.244-9.296 7.463-3.604 18.503-16.125 19.902-18.78 1.4-2.656 1.71-6.26-.311-7.968-1.866-1.707-5.13.57-6.997 3.794-5.13 9.106-8.24 13.469-11.816 17.263-2.799 2.846-4.043 3.035-5.442 3.225 0 0 5.13-10.244 6.997-13.28 2.332-3.603-.467-4.931-3.265-2.655-.622.38-4.82 4.174-10.107 7.398-9.329 5.881-11.505 8.537-11.505 11.952 0 1.517.932 3.604 2.798 3.604 3.576 0 7.308-7.968 9.018-9.865.622-.758 2.332-2.466 2.954-2.466.156 0 .311.19.311.57 0 1.517-2.487 5.88-6.219 10.813C5.301 38.41.793 41.257.793 45.809c0 3.036 1.865 4.553 3.886 4.553 4.198 0 6.997-6.829 8.707-10.244.622-1.328 4.354-9.674 5.131-11.571.777.569 1.244 1.707 1.088 3.794-.466 3.983-3.42 8.916-3.42 15.555 0 5.502 4.198 7.209 5.908 7.209 1.555 0 3.576-.76 4.043-2.656 0-.19-.156-.57-.467-.57Zm123.608-31.49c.932 0 1.399.758 1.399 1.707 0 1.138-.622 1.707-1.399 1.707-.933 0-1.4-.759-1.4-1.707 0-.949.467-1.707 1.4-1.707Zm0 3.035c.621 0 1.088-.57 1.088-1.328 0-.76-.467-1.328-1.088-1.328-.622 0-1.089.569-1.089 1.328 0 .948.467 1.328 1.089 1.328Zm0-2.087c.155 0 .466.19.466.57 0 .189-.155.378-.311.568.156.19.156.38.311.38h.155v.19c0 .189.001.189-.155.189-.311 0-.311-.38-.466-.759h-.156v.57h-.155c-.156 0-.156 0-.156-.19v-1.518H149.277Zm-.156.19v.38h.156c.155 0 .311 0 .311-.19s0-.19-.156-.19h-.311Z" fill="#D31245"/></svg>

//                         <svg width="59" height="63" viewBox="0 0 59 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M56.6558 13.7755C56.0184 12.4898 55.0169 10.8367 53.469 9.55102C52.8316 8.90816 52.0122 8.44898 50.9195 8.26531C50.1001 8.08163 49.2806 7.80612 48.3701 7.80612H48.188C47.0954 7.80612 45.0012 7.9898 43.8175 9.73469C43.1801 10.3776 42.998 11.3878 43.1801 12.4898C43.3622 13.3163 43.8175 13.9592 44.637 14.1429C44.637 14.1429 44.8191 14.1429 45.2743 14.3265C45.0922 14.3265 44.8191 14.7857 44.8191 14.7857C44.3638 15.4286 43.3622 16.4388 40.4486 16.4388H40.2665C38.8096 16.4388 37.5349 15.9796 36.0781 14.1429C35.2586 12.8571 34.6213 10.9286 34.6213 7.62245C34.6213 5.96939 34.4392 4.40816 33.9839 3.39796C33.8018 2.57143 33.1644 1.92857 32.5271 1.46939C32.0718 1.0102 31.4344 0.826531 30.615 0.642857C29.7955 0 28.5208 0 27.5192 0C26.2445 0 25.6071 0.183673 25.2429 0.826531C25.2429 0.826531 25.2429 1.0102 25.0608 1.0102H24.2414C23.604 1.0102 22.9666 1.19388 22.3293 1.19388C21.0545 1.37755 20.4172 1.83673 19.5977 2.47959C19.4156 2.66327 18.7782 3.30612 18.5051 4.13265C18.323 4.77551 18.5051 5.23469 18.6872 5.41837C18.6872 5.41837 18.6872 5.60204 18.8693 5.60204C19.3246 5.14286 19.9619 4.95918 20.9635 4.95918C22.2382 4.95918 24.1503 5.60204 24.6966 6.61225C25.5161 8.08163 25.334 9.18367 25.1519 10.6531C24.6966 14.2347 23.2398 16.1633 20.5082 16.5306H19.0514C16.9572 16.5306 15.5004 15.8878 14.863 14.602C14.4078 14.1429 14.4078 13.9592 14.4078 13.9592C14.4078 13.9592 14.5899 13.9592 14.863 13.7755C15.6825 13.3163 16.1377 12.949 16.3199 12.1224C16.502 11.2959 16.3198 10.1939 15.6825 9.36735C14.5899 8.26531 13.133 7.71429 11.312 7.71429C10.2194 7.71429 9.39991 7.89796 8.76255 8.17347C6.2131 8.81633 4.39207 10.4694 2.93524 13.6837C1.84262 15.7959 1.02315 18.7347 0.841045 21.6735C0.658942 24.6122 0.658942 27.1837 0.841045 29.4796C1.2963 33.2449 1.93367 35.6327 2.75313 37.9286C3.5726 40.5 4.84732 42.7959 6.12205 44.9082C6.57731 45.7347 6.75941 46.1939 6.94152 46.3776C7.12362 46.1939 7.39678 45.9184 7.57888 45.551C8.03414 45.0918 9.49097 43.2551 9.85517 42.6122C10.4925 42.1531 11.1299 40.9592 11.4941 40.0408L11.6762 39.5816L12.1315 40.0408C12.5867 40.5 12.7688 40.8673 12.7688 41.5102C12.7688 42.1531 12.5867 42.7959 12.3136 44.0816C11.8583 45.3673 11.221 47.0204 10.4015 48.3061C10.4015 48.4898 10.2194 48.7653 10.2194 48.7653C9.76412 49.5918 9.58202 50.051 9.76412 50.2347C9.94623 50.2347 10.5836 50.051 11.221 49.4082C12.0404 49.0408 13.4972 47.7551 15.3183 45C16.7751 43.0714 17.8677 40.9592 18.8693 38.6633L19.0514 38.2041L19.5067 38.3878C19.6888 38.3878 19.9619 38.5714 19.9619 38.8469C20.144 39.3061 20.144 39.6735 20.144 40.3163C19.9619 41.7857 19.0514 43.898 18.5051 45.3674C17.4125 47.9388 15.3183 50.8776 13.8615 52.9898C13.8615 52.9898 13.4062 53.449 13.4062 53.6327C13.5883 53.8163 13.8615 54.0918 14.2257 54.2755L14.863 54.7347C16.9572 56.3878 18.8693 57.949 21.3277 59.1429C23.2398 60.2449 27.155 62.3571 29.7045 62.9082C32.2539 62.2653 36.1691 60.1531 38.0812 59.1429C40.6307 57.6735 42.4517 56.3878 44.5459 54.7347L45.1833 54.2755C45.6385 54.0918 45.8206 53.6327 46.0027 53.6327C46.0027 53.6327 45.8206 53.449 45.8206 53.1735L45.6385 52.9898C44.1817 50.8776 42.0875 47.9388 40.9949 45.3674C40.3575 43.898 39.5381 41.602 39.356 40.3163C39.356 39.6735 39.356 39.2143 39.5381 38.8469C39.5381 38.6633 39.7202 38.6633 39.9933 38.3878C40.1754 38.2041 40.4486 38.2041 40.4486 38.2041L40.6307 38.6633C41.7233 40.9592 42.907 42.8878 44.1817 45C46.0938 47.7551 47.5506 49.0408 48.188 49.4082C48.8253 49.8673 49.4627 50.2347 49.6448 50.2347H49.918C50.1001 50.051 49.918 49.5918 49.4627 48.7653C49.4627 48.5816 49.2806 48.3061 49.2806 48.3061C48.4611 46.8367 47.8238 45.3673 47.3685 44.0816C46.9133 42.7959 46.7312 42.1531 46.7312 41.5102C46.7312 40.8673 46.9133 40.2245 47.3685 40.0408L47.8238 39.8571L48.0059 40.3163C48.4611 41.1429 49.2806 42.4286 49.4627 42.8878C49.918 43.5306 51.3748 45.1837 51.739 45.8265L52.3764 46.4694C52.5585 46.2857 52.8316 45.8265 53.1958 45.1837V45C54.4706 42.8878 55.4721 40.5918 56.5647 38.0204C57.3842 35.449 58.0216 33.3367 58.4768 29.5714C58.6589 27.2755 58.9321 24.7041 58.4768 21.7653C58.4768 18.8265 57.9305 15.8878 56.6558 13.7755Z" fill="url(#paint0_radial_83_7944)"/><defs><radialGradient id="paint0_radial_83_7944" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.34089 11.3483) scale(64.0306 64.5825)"><stop stop-color="#20C4F4"/><stop offset="0.304" stop-color="#09B4F0"/><stop offset="0.5" stop-color="#00AEEF"/><stop offset="0.8" stop-color="#0092C8"/><stop offset="1" stop-color="#006E98"/></radialGradient></defs></svg>

//                     </Sponsors >
//                 </div>

//                 <div className={styles.aboutUsHomeContainer}>
//                     <SectionHeading heading="About Us"/>
//                     <AboutUs />
//                     <YellowButton yellowBtn="Get Started" variant="center">
//                         <p>Read more</p>
//                     </YellowButton>
                    
                    
                    
//                 </div>

//                 <div className={styles.featuresSectionContainer}>
//                     <SectionHeading heading="Our Unique Features"/>
//                     <div className={styles.featuresContainer}>
//                         <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820650/Frame_37_qwsqu0.svg" featureTitle="Incident Detection and Alerting" featureDescription="Our incident detection system constantly monitors all your digital assets for any phishing, unauthorized access attempts"/>

//                         <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820648/Frame_39_s6zzsi.svg" featureTitle="Automated Incident Triage" featureDescription="Efficiently categorize security incidents for rapid response, minimizing disruptions to your digital assets and operations."/>

//                         <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820649/Frame_38_fdup1j.svg" featureTitle="Data Loss Prevention (DLP)" featureDescription="OOur DLP feature helps to protect your organization’s sensitive data, reducing the risk of data loss incidents."/>

//                         <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820683/Frame_40_iwfmuo.svg" featureTitle="Multi-Factor Authentication " featureDescription="Our MFA feature adds an extra layer of protection against unauthorized access to your sensitive data and systems."/>
//                     </div>
//                 </div>

//                 <div className={styles.faqsContainer}>
//                     <SectionHeading heading="Frequently Asked Questions"/>
//                     <FAQs />
//                 </div>
//                 <div className={styles.contactSection}>
//                     <SectionHeading heading="Contact Us"/>
//                     <Contact />
//                     <YellowButton yellowBtn="Get Started" variant="center">
//                         <p>Read more</p>
//                     </YellowButton>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     )
// }

// export default Home