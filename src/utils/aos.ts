import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200, // Thời gian hiệu ứng hoạt hình, đơn vị là ms
    offset: 100, // Khoảng cách từ dưới cùng của phần tử trước khi hiệu ứng kích hoạt
    delay: 0, // Độ trễ trước khi bắt đầu hiệu ứng
    once: false, // Chỉ thực hiện hiệu ứng một lần
  });
  
  export default AOS;