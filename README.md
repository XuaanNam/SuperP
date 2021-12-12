# SuperP

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ĐH Sư Phạm Kỹ Thuật - Khóa 19 - Ngành Công nghệ thông tin - Khoa Đào tạo Chất lượng cao <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Học kì thứ 5 / 2019-2023 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Học phần: Điện toán đám mây (3 tín chỉ)

Đây là đồ án cuối kì môn Điện toán đám mây của nhóm 22 - Amazon Lightsail <br>
Đề tài: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Tìm hiểu về Amazon Lightsail <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Tạo ứng dụng minh họa     

Đồ án được hướng dẫn bởi thầy Huỳnh Xuân Phụng <br>

Thành viên nhóm gồm:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Nguyễn Xuân Nam     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      19110243<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Nguyễn Dương Quốc Anh   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  19110164<br><br><br>


# HƯỚNG DẪN CÁCH DEPLOY VÀ CONFIGURE PORT TRÊN AMAZON LIGHTSAIL
  ## Khởi tạo một phiên bản
  
  ### `Tạo phiên bản`
  
  Chọn nút `Create instance` trong tab `Instances` của [trang chủ](https://lightsail.aws.amazon.com/ls/webapp/home/instances)
  
  ### `Chọn khu vực`
  
  Có nhiều khu vực khác nhau, ở đây nhóm em chọn khu vực `Virginia (us-east-1)`
  
  ### `Chọn nền tảng`
  
  Amazon Lightsail hỗ trợ hai nền tảng là `Mircrosoft Windows` và `Linux/Unix` \
  
  Trong `Microsoft Windows`, nền tảng `Windows Server 2016` và `Windows Server 2012` có sẵn để cài đặt trên Lightsail \
  
  Với `Linux` người dùng có thể tải `Amazon Linux`, `Ubuntu 16.04 & 18.04`, `Debian 8.7 / 9.5`; `FreeBSD`, `OpenSUSE 42` và `CentOS 7` \
  
  Mặt khác, khi nhấp vào tùy chọn `APPS + OS` , có rất nhiều ứng dụng được tích hợp sẵn với hệ điều hành Amazon Linux, chúng ta chỉ cần nhấp chuột cùng với vài thao tác là có thể sử dụng được\
  
  Các ứng dụng có sẵn có thể kể đến là `WordPress`, `LAMP (PHP 7)`, `Node.js`, `Joomla`, `Magento`, `MEAN`, `Drupal`...\
  
  Trong dự án này, nhóm em chọn ứng dụng MEAN
  
  ### `Các tùy chọn`
  
  #### `Launch script`
  
  Người dùng có thể thêm một tập lệnh khởi chạy để thực hiện những việc như thêm phần mềm, cập nhật phần mềm hoặc định cấu hình phiên bản
  
  #### `SSH Key`
  
  `SSH Key` là một phương thức xác thực đăng nhập với máy chủ thông qua truy cập SSH bằng việc đối chiếu giữa một cặp key, bao gồm một key cá nhân (`private key`) và key công khai (`public key`)\
  
  `Private key` và `Public key` có mối liên hệ chặt chẽ với nhau nhằm mục đích nhận diện lẫn nhau. Chúng ta có thể tạo key riêng cho mình, ở đây được dùng mặc định như bên dưới và nhấn `download`
  
  ### `Chọn cấu hình cho máy chủ`
  
  Amazon Lightsail cho phép người dùng lựa chọn thông số về phần cứng cho máy chủ như `ram`, `ổ cứng`, `cpu`\
  
  Người dùng có thể chọn nhiều mức độ khác nhau, cấu hình càng mạnh đi đôi với giá tiền càng cao
  
  ### `Khởi tạo`
  
  Đặt tên cho ứng dụng là `clouds-superP` và nhấn vào nút `Create instance`
  
  ## `Thiết lập IP tĩnh`
  
  Chọn mục `Networking` và nhấp vào nút `Create static IP` trong [trang chủ](https://lightsail.aws.amazon.com/ls/webapp/home/instances)\
  
  Chọn phiên bản vừa được tạo ở bên trên là `clouds-superP`\
  
  Đặt tên cho IP tĩnh là `staticIp-superP` và nhấn nút `Create`
  
  ## `Tạo thêm port`
  
  Vì ứng dụng của tụi em lắng nghe trên `port 3000`, nên ta sẽ mở thêm một `port 3000`\
  
  Trong trang quản lý của `clouds-superP`, nhấn vào nút `Add rule` trong mục `Networking` để thêm một port 3000
  
  ## `Kết nối ssh`
  
  ### `Kết nối trên trình duyệt`
  
  Amazon Lightsail cho phép người dùng kết nối với ssh chỉ bằng một cú nhấp chuột, nhằm tăng sự thuận tiện cho người dùng\
  
  Chỉ cần ấn vào nút `Connect using SSH` trong trang quản lí của `clouds-superP` là ta có thể trực tiếp kết nối tới máy chủ bằng trình duyệt
  
  ### `Kết nối trên CMD`
  
  Kết nối với server trên cmd: `ssh -i LightsailDefaultKey-us-east-1.pem bitnami@35.170.130.161` với `LightsailDefaultKey-us-east-1.pem` là khóa mặc định, `bitnami` là người dùng mặc định và `35.170.130.161` là địa chỉ ip tĩnh của máy chủ
  
  ## `Triển khai ứng dụng`
  
  ### `Bước 1`
  
  - Kết nối ssh tới máy chủ\
  
  - Dùng `sudo su` để được cấp quyền cao nhất – `root`\
  
  - Tiếp đó ta nhập lệnh `apt clean` để dọn dẹp file rác trong hệ thống \
  
  - Để tránh lỗi, ta cập nhật các ứng dụng hiện có lên phiên bản mới nhất bằng 2 dòng lệnh `apt-get update` và `apt upgrade` (nếu được hỏi `Do you want to continue? [Y/n]` thì ấn `y` để tiếp tục)\
  
  - Thoát khỏi quyền `Root` bằng lệnh `exit`
  
  ### `Bước 2`
  
  - Nếu để mặc định, máy chủ sẽ lắng nghe ở `port 80`, và vì thế để nó có thể lắng nghe `port 3000` theo cấu hình của ứng dụng đã tạo, ta phải cấu hình cho nó\
  
  - Truy cập thư mục chứa file configure mặc định bằng lệnh `cd /opt/bitnami/apache2/conf/vhosts/`, ở đây ta thấy trong thư mục có các file configure cơ bản\
  
  - Theo mặc định các file `sample-https-vhost.conf.disabled` dùng để cấu hình cho giao thức `HTTPS` và `sample-vhost.conf.disabled` dùng để cấu hình cho giao thức `HTTP`. Cả hai file này đều đang bị vô hiệu hóa, để sử dụng cần bỏ phần đuôi `.disabled` trong tên của chúng\
  
  - Đổi tên file `sample-vhost.conf.disabled` thành `SuperP-vhost.conf` và `sample-https-vhost.conf.disabled` thành `SuperP-https-vhost.conf` bằng 2 câu lệnh sau:\
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	`mv sample-vhost.conf.disabled SuperP-vhost.conf`\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	`mv sample-https-vhost.conf.disabled SuperP-https-vhost.conf`\

  - Sau đó dùng trình chỉnh sửa vi: `sudo vi SuperP-vhost.conf` truy cập vàp file `SuperP-vhost.conf`, sửa mục `DocumentRoot` với đường dẫn ứng dụng mà ta sẽ đặt trên máy chủ này, tương tự với thẻ `<Directory “//”>`\
  
  - Tiếp tục thay đổi số `port` ở cuối dòng `ProxyPass` và `ProxyPassReverse` thành `port` mà ứng dụng sẽ lắng nghe\
  
  - Truy cập vào file `SuperP-https-vhost.conf` bằng lệnh: `sudo vi SuperP-https-vhost.conf`, làm tương tự để cấu hình cho giao thức `HTTPS`
  
  ### `Bước 3`
  
  - Dùng lệnh `cat bitnami_application_password` để lấy mật khẩu của hệ thống, mật khẩu ở đây là `s1CF1XDBZT7T`\
  
  - Dùng lệnh `mongo admin --username root -password s1CF1XDBZT7T` để kết nối với `MongoDB`\
  
  - Tạo một `database` mới và đặt tên là `superp` bằng lệnh: `db = db.getSiblingDB('superp')`\
  
  - Tạo một người dùng cho phép toàn quyền truy cập vào database theo cú pháp: \
      db.createUser(
    {
      user: "username",
      pwd: "password",
      roles: ["readWrite", "dbAdmin"]
    } 
  )\
  
  - Thoát khỏi trình quản lí `MongoDB` bằng lệnh `exit`
  
  ### `Bước 4`
  
  - Do đã thêm ứng dụng trên `github`, ta có thể clone source code về: `git clone https://github.com/XuaanNam/SuperP.git`\
  
   -Truy cập vào file `SuperP` vừa clone từ github về, dùng lệnh `npm i` để cập nhật toàn bộ modules bao gồm các thư viện liên quan của chương trình\
  
  - Dùng lệnh `cd` để thoát ra ngoài\
  
  - `forever`là một thư viện giúp ứng dụng tự duy trì hoạt động, và tự khởi chạy lại ứng dụng mỗi khi có sự cố\
  
  - Ta sẽ tải xuống thư viện này thông qua trình quản lí package `npm` (đã được cài đặt sẵn theo gói `mean application` khi tạo máy chủ) bằng lệnh: `npm install forever -g` (-g ở đây nghĩa là global, thư viện này có thể áp dụng cho mọi ứng dụng có trong máy chủ này)\
  
  - Trước khi khởi chạy ứng dụng, ta `restart` máy chủ để mọi cấu hình đều được thực thi\
  
  - `Stop` máy chủ trong phần quản lí\
  
  - Sau đó đợi 1 lúc rồi `khởi động lại` và kết nối với máy chủ bằng ssh
  
  ### `Bước 5`
  
  - Sau khi truy cập tới máy chủ dùng lệnh `cd SuperP/src` để truy cập vào thư mục `SuperP/src`, nơi chứa file `index.js` – là file khởi chạy của ứng dụng (ứng dụng `SuperP` đã được tải ở bước trên)\
  
  - Tiếp theo dùng lệnh `forever start index.js` để khởi chạy ứng dụng mãi mãi, lệnh này do thư viện `forever` (ta đã tải ở bước trên) cung cấp\
  
  - Ứng dụng đã được triển khai trên ip tĩnh `35.170.130.161` và mặc định port lắng nghe sẽ là `3000`
  
  ### Link trang web http://35.170.130.161/
  
  

  

  

  


  
  
  

  
  
  


