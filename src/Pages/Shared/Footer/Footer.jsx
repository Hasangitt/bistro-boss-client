const Footer = () => {
  return (
    <footer>
      <div className="md:flex text-white">
        <div className="bg-[#1F2937] space-y-4 p-20 md:w-1/2">
          <h3 className="text-xl">CONTACT US</h3>
          <p>
            123 ABS Street, Uni 21, Bangladesh +88 123456789 Mon - Fri: 08:00 -
            22:00 Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] space-y-4 p-20 md:w-1/2">
          <h3 className="text-xl">Follow US</h3>
          <p>Join us on social media</p>
        </div>
      </div>
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Muhammad Hasan Ali
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
