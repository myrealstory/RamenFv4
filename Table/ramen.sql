-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306:4306
-- Generation Time: Aug 14, 2022 at 08:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ramen`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `SID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `valid_Time` datetime NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`SID`, `username`, `password`, `valid_Time`, `created_at`) VALUES
(1, 'admin', '$2a$10$4sje11/ZvDlJ2JtJIR1cEunOpEXPkJPe1czMZg3ox.cmSS08EiunC', '2030-07-01 23:52:41', '2022-07-07 17:52:41'),
(2, 'chung', '$2a$10$QYaWdWtBSvyksvWZTnFiyeWnbwe4fJVqO3pC6.znNNuPdVR3A7pVK', '2022-07-21 09:27:35', '2022-07-21 09:27:35'),
(5, 'Gordon', '$2a$10$CAwQYQsFetBdb2.QLASoNOFFI3Sc9wRuK.bIBYNU6Z5DCSc8GXPG2', '2022-07-31 21:16:02', '2022-07-31 21:16:02');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `sid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `mobile` int(10) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `birthday` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`sid`, `username`, `password`, `created_at`, `mobile`, `address`, `birthday`) VALUES
(1, 'admintest', '$2a$10$CTRZ6TJoWyXWq.cGCkUwye5GflkjUjg3M1FOPVycupakjfIQLXfXi', '2022-07-01 09:39:02', 988123456, '12485798jbjfuvkbjhfgmj', '1989-12-06 15:39:02'),
(3, 'Gordon', '$2a$10$huwo/nejZXa3RM6u747V3eWFoTfIHsZyL4xGaKm/7pSNksnsoVuJS', '2022-08-01 00:35:30', NULL, NULL, NULL),
(4, 'chung', '$2a$10$JWp2hmvl7.LJeo.frXFwDe6x9tD5Z99Lz4NfXJTYEh7f4P7C//0BS', '2022-08-01 00:35:50', 985112346, '台北市 火星區 夢芭拉沙卡沙卡區 做夢街 666巷 1號 1樓', '1990-08-08 13:27:50'),
(5, 'friend', '$2a$10$xrgdVPig0bEyasM.E51vMObFSw3VZhQctPdOmn8SDbl5.eiFq/w0K', '0000-00-00 00:00:00', 978653256, 'asdasfasdasdasdaasdasdasdasd', '2022-08-16 00:00:00'),
(6, 'Lalala67', '$2a$10$ckeCaqh0pesPtPLnBHknjOF9Lr/gIToChOJSvP2F2Vc7rb.Q2EJ5i', '2022-08-08 01:40:57', 988555555, 'asdasfasdasdasdaasdasdasdasd', '2022-08-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `SID` int(11) NOT NULL,
  `Title` text NOT NULL,
  `Created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`SID`, `Title`, `Created_at`) VALUES
(1, '│舒蔓限定│泰式酸辣拉麵', '2022-07-22 15:00:04'),
(2, '花月嵐內用菜單', '2022-07-22 15:00:33'),
(3, '歡迎外帶【優惠外帶套餐組合】', '2022-07-22 15:00:39'),
(4, '花月嵐4人狂省分享餐', '2022-07-22 15:01:10'),
(5, '花月嵐3人優惠分享餐', '2022-07-22 15:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `sid` int(11) NOT NULL,
  `Sales_Order` int(11) NOT NULL,
  `product_id` varchar(500) NOT NULL,
  `username` varchar(500) NOT NULL,
  `amount` int(11) NOT NULL,
  `price_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`sid`, `Sales_Order`, `product_id`, `username`, `amount`, `price_amount`) VALUES
(1, 1, '1', 'admintest', 1, 230),
(2, 1, '2', 'admintest', 1, 150),
(5, 1, '18', 'admintest', 2, 300),
(6, 2, '26', 'admintest', 2, 240),
(7, 2, '12', 'admintest', 2, 200),
(8, 3, '7', 'admintest', 1, 300),
(9, 3, '3', 'admintest', 1, 250);

-- --------------------------------------------------------

--
-- Table structure for table `order_list`
--

CREATE TABLE `order_list` (
  `SID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `Total_Price` int(11) NOT NULL,
  `Cart_Created` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `Discount` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_list`
--

INSERT INTO `order_list` (`SID`, `username`, `Total_Price`, `Cart_Created`, `status`, `Discount`) VALUES
(1, 'admintest', 0, '2022-08-08', '完成訂單', ''),
(2, 'admintest', 0, '2022-08-06', '完成訂單', ''),
(3, 'admintest', 0, '2022-08-05', '完成訂單', '');

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `product_sid` int(111) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` text DEFAULT NULL,
  `Publish_Date` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `Discount` varchar(11) DEFAULT NULL,
  `Image` varchar(500) NOT NULL,
  `RemoveBG` varchar(500) NOT NULL,
  `FoodType` varchar(255) NOT NULL,
  `BackGColor` varchar(7) NOT NULL,
  `Materials` text NOT NULL,
  `SpicyLevel` varchar(1000) NOT NULL,
  `RandomKey` int(11) NOT NULL,
  `RandomKey2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_detail`
--

INSERT INTO `product_detail` (`product_sid`, `product_name`, `product_description`, `Publish_Date`, `price`, `Discount`, `Image`, `RemoveBG`, `FoodType`, `BackGColor`, `Materials`, `SpicyLevel`, `RandomKey`, `RandomKey2`) VALUES
(1, '娘惹辣炸雞飯', ' 辣雞飯勢必能夠左右未來。我們都很清楚，這是個嚴謹的議題。池田大作說過一句發人省思的話，不要迴避苦惱和困難，挺起身來向它挑戰，進而克服它。這段話雖短，卻足以改變人類的歷史。我以為我了解辣雞飯，但我真的了解辣雞飯嗎？仔細想想，我對辣雞飯的理解只是皮毛而已。', '2022-12-09 12:22:43', 230, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603619/Ramen/NasilemakAyamPedas_il0o4j.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603622/Ramen/NasilemakAyamPedas_fvti8e.png', 'Main', '#D84444', '食材：辣椒乾，秘方炸雞，新鮮大陸妹，小黃瓜，椰漿飯', 'Level2', 657, 909),
(2, '青檸酸酸粉', '白茵說過一句著名的話，最忙的人有最多的時間。這句話幾乎解讀出了問題的根本。約翰勳曾提出，愛情是兩顆靈魂的結合。這似乎解答了我的疑惑。我們不妨可以這樣來想: 青檸酸酸粉的發生，到底需要如何實現，不青檸酸酸粉的發生，又會如何產生。', '2022-07-17 00:00:00', 180, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603613/Ramen/Ginger_Miso_Soba_Noodle_Bowls_With_Wakame_sglfxx.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703110/Ramen/Ginger_Miso_Soba_Noodle_Bowls_With_Wakame_byn7kz.png', 'Main', '#FF9494', '食材：青檸，冷細麵，青蔥，白蘿蔔刨絲，柴魚高湯', '', 128, 13),
(3, '照燒日式蓋飯', '問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。杰弗遜告訴我們，對驕傲的人不要謙虛，對謙虛的人不要驕傲。這不禁令我重新仔細的思考。說到照燒日式蓋飯，你會想到什麼呢？', '2022-07-17 00:00:00', 250, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603614/Ramen/gorengayamricesaja_itlpgz.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703110/Ramen/gorengayamricesaja_uerg9y.png', 'Main', '#FE5858', '食材：新鮮雞肉，特調照燒醬，高麗菜，日本進口米', '', 669, 341),
(4, '家鄉炸雞椰漿飯', '不難發現，問題在於該用什麼標準來做決定呢？總結來說，洛克在過去曾經講過，在缺乏教養的人身上，勇敢就會成為粗暴，學識就會成為迂腐，機智就會成為逗趣，質樸就會成為粗魯，溫厚就會成為諂媚。這句話令我不禁感慨問題的迫切性。一般來講，我們都必須務必慎重的考慮考慮。對我個人而言，家鄉炸雞椰漿飯不僅僅是一個重大的事件，還可能會改變我的人生。', '2022-07-12 00:00:00', 180, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603619/Ramen/NasiLemak_Ayam_zejtx3.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703109/Ramen/NasiLemak_Ayam_auixul.png', 'Main', '#FE4242', '食材：秘方炸粉和醃料，炸雞塊2個，娘惹三八醬，小黃瓜，娘惹斑斕飯，小魚乾，花生', 'Level3', 964, 664),
(5, '鹹蛋黃碰碰雞', '林逋在不經意間這樣說過，推誠而不欺，守認而不疑。這句話把我們帶到了一個新的維度去思考這個問題。紀伯倫說過一句經典的名言，信仰是心中的綠洲，思想的駱駝隊是永遠走不到的。這句話令我不禁感慨問題的迫切性。每個人的一生中，幾乎可說碰到鹹蛋黃碰碰雞這件事，是必然會發生的。', '2022-07-17 00:00:00', 280, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603618/Ramen/naiyouchicken_dugpkh.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703108/Ramen/naiyouchicken_oi03gr.png', 'Sub', '#eddb8a', '食材：鹹蛋，植物油，紅椒，新鮮雞塊，洋蔥，老醬油', '', 814, 299),
(6, '乾辣椒烤魚飯', '孔子曾經提到過，知之者不如好之者，好之者不如樂之者。這句話語雖然很短，但令我浮想聯翩。我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。需要考慮周詳乾辣椒烤魚飯的影響及因應對策。這樣看來，謹慎地來說，我們必須考慮到所有可能。', '2022-07-12 08:03:08', 280, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603616/Ramen/ikanbalacang_fdnuwj.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703540/Ramen/ikanbalacang_b31axl.png', 'Main', '#CC2A2A', '食材：秘制馬來烤魚，娘惹三八醬，小黃瓜，娘惹斑斕飯，小魚乾，花生', 'Level3', 176, 502),
(7, '一鍋咖哩雞', ' 面對如此難題，我們必須設想周全。一鍋咖哩雞絕對是史無前例的。問題的關鍵究竟為何？老舊的想法已經過時了。所謂一鍋咖哩雞，關鍵是一鍋咖哩雞需要如何解讀。探討一鍋咖哩雞時，如果發現非常複雜，那麼想必不簡單。對於一鍋咖哩雞，我們不能不去想，卻也不能走火入魔。', '2022-07-12 08:03:29', 300, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658646723/Ramen/Ayamkali_ksmuwh.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703107/Ramen/Ayamkali_eehs0z.png', 'Main', '#C00E0E', '食材：娘惹特製咖哩，椰醬，新鮮雞肉，青豆，馬鈴薯，辣椒乾', 'Level3', 440, 615),
(8, '三八炸雞椰漿飯', '可是，即使是這樣，三八炸雞椰漿飯的出現仍然代表了一定的意義。如果別人做得到，那我也可以做到。高爾基說過一句富有哲理的話，理智要比心靈為高，思想要比感情可靠。希望各位能用心體會這段話。這樣看來，我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。', '2022-07-12 08:03:47', 320, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603622/Ramen/SambalGorengAyam_iwg0qm.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703109/Ramen/SambalGorengAyam_zwobwt.png', 'Main', '#8E0303', '食材：勁辣娘惹三八醬，娘惹三八醬，小黃瓜，異國臭豆，娘惹斑斕飯，小魚乾，花生', 'Level3', 673, 568),
(9, '滷豬肉和有機蛋', ' 若能夠欣賞到滷豬肉和有機蛋的美，相信我們一定會對滷豬肉和有機蛋改觀。滷豬肉和有機蛋因何而發生？滷豬肉和有機蛋似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。塞內加曾經提到過，肚子是聽不進勸告的。我希望諸位也能好好地體會這句話。', '2022-07-12 08:04:05', 100, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603618/Ramen/lurouzhugu_cl5acx.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703109/Ramen/lurouzhugu_ahrmph.png', 'Sub', '#FFB710', '食材：家傳秘法滷汁，五花肉，雞蛋，蒜，花椰菜', '', 43, 996),
(10, '白胡椒排骨湯', '愛默生曾經提到過，即使斷了一條弦，其餘的三條弦還是要繼續演奏，這就是人生。這句話反映了問題的急切性。世界需要改革，需要對白胡椒排骨湯有新的認知。謹慎地來說，我們必須考慮到所有可能。對於一般人來說，白胡椒排骨湯究竟象徵著什麼呢？', '2022-07-12 08:04:31', 120, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603615/Ramen/KoreanBigBoneSoup_aa6uqt.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703108/Ramen/KoreanBigBoneSoup_il8efu.png', 'Sub', '#FEDA85', '食材：排骨，細磨白胡椒，高麗菜高湯，蒜，大腸', 'Level1', 198, 277),
(11, '夠力的燒肉', '培根講過一段深奧的話，友誼的主要效用之一就在使人心中的憤懣抑鬱之氣得以宣洩弛放，這些不平凡之氣是各種的情感都可以引起的。這影響了我的價值觀。夠力的燒肉的出現，必將帶領人類走向更高的巔峰。在這種困難的抉擇下，本人思來想去，寢食難安。', '2022-07-12 08:07:07', 120, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603609/Ramen/xiurokonly_w75gtp.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703105/Ramen/xiurokonly_qok16s.png', 'Sub', '#FDC33D', '食材：祖傳燒肉秘方，五花肉，鹽，黑胡椒，醬油', '', 861, 395),
(12, '香港海運叉燒', '  問題的核心究竟是什麼？香港海運叉燒對我來說，已經成為了我生活的一部分。探討香港海運叉燒時，如果發現非常複雜，那麼想必不簡單。既然如此，其實，若思緒夠清晰，那麼香港海運叉燒也就不那麼複雜了。看看別人，再想想自己，會發現問題的核心其實就在你身旁。', '2022-07-12 08:07:27', 100, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603609/Ramen/chaxiuonly_aoiz3m.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703107/Ramen/chaxiuonly_zkaqfu.png', 'Sub', '#C88C01', '食材：港式蜜汁，瘦肉，烤豬皮', '', 713, 147),
(17, '印度素咖哩燉番薯飯', '照片裡看得見的蘆筍、龍鬚菜、蓮藕、鴻喜菇、小蕃茄、紅蘿蔔、馬鈴薯、南瓜、花椰菜、秋葵、玉米筍、絲瓜、筊白筍等，\r\n琳瑯滿目的把一整盤「十六種野菜湯咖哩」給裝好裝滿，懶得細算、不需思考，就好好的品嚐它就好.因為它和一般的咖哩不一樣，濃度、鹹度更低，甚至還可以把整碗白飯倒進湯盤裡一起品嚐～\r\n那種每一口都熱騰騰的感受，太療癒、太溫暖了。', '2022-07-15 18:26:18', 170, '1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603626/Ramen/VEGETABLE_CURY_WITH_SWEET_POTATO_ld08mp.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1660310499/Ramen/VEGETABLE_CURY_WITH_SWEET_POTATO_wfuvra.png', '', '', '', '', 981, 549),
(18, '老闆最愛的清酒', '我們需要淘汰舊有的觀念，當你搞懂後就會明白了。勁酒有醉勁酒醉，到底應該如何實現。世界需要改革，需要對勁酒有醉勁酒醉有新的認知。需要考慮周詳勁酒有醉勁酒醉的影響及因應對策。托爾斯泰曾經提到過，英雄主義是在於為信仰和真理而犧牲自己。但願諸位理解後能從中有所成長。', '2022-07-17 17:55:02', 150, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659423574/Ramen/__opt__aboutcom__coeus__resources__content_migration__liquor__2015__04__Andaz_Tokyo_cocktail-3c113db1ee974275836fbbe94f58b88d_v6mtmx.png', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659771462/Ramen/TodaySoujiu_odzjbw.png', 'Sub', '#E4A410', '食材：每天依據老闆心情特調燒酒', '', 768, 307),
(23, '大俠泰式醬與娘惹叻沙', '這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。聶夷中說過一句經典的名言，男兒徇大義，立節不沽名。這段話對世界的改變有著深遠的影響。如果仔細思考大俠泰式醬與娘惹叻沙，會發現其中蘊含的深遠意義。對於大俠泰式醬與娘惹叻沙，我們不能不去想，卻也不能走火入魔。', '2022-07-24 10:12:55', 160, '1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603623/Ramen/seafoodbigPrawl_dipnvc.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603626/Ramen/seafoodbigPrawl_vpx16y.png', '', '', '', '', 898, 885),
(25, '印度牛與台灣雞共舞', '凱洛夫說過一句發人省思的話，勞動使一個人的道德變得高尚，使他習慣於小心地對待勞動的工具、器械和產品，重視書籍及其他精神文化和物質文化的物品，尊重任何一種職業的勞動者，仇視那些寄生蟲和剝削者、二流子、怯懦者和懶漢。但願各位能從這段話中獲得心靈上的滋長。儘管如此，別人往往卻不這麼想。說到印度牛與台灣雞共舞，你會想到什麼呢？', '2022-07-24 11:24:41', 150, '1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659770018/Ramen/beefSatay_n9yhvs.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659770019/Ramen/Beef_Satay_smtrwg.png', 'Sub', '#ffcc60', '食材：台灣牧場牛，台灣新鮮雞肉，黃姜糯米飯，黃瓜，紫洋蔥', '', 184, 507),
(26, '就素尼拉麵', '在這種困難的抉擇下，本人思來想去，寢食難安。如果別人做得到，那我也可以做到。深入的探討就素尼拉麵，是釐清一切的關鍵。既然如此，德謨克利特講過一段耐人尋思的話，不要企圖無所不知，否則你將一無所知。這段話令我陷入了沈思。劉基曾經認為，凡與敵戰，須務持重。見利則動，不見利則止，慎不可輕舉也。這句話看似簡單，卻埋藏了深遠的意義。', '2022-07-24 11:27:36', 120, '1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659704175/Ramen/bigboneCheapmee_wb7lxa.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659704176/Ramen/bigboneCheapmee_hfsglz.png', 'Sub', '#d08e00', '', '', 228, 879),
(27, '台灣原創牛肉麵', '上面有灑上蔥花、酸菜，他們家的牛肉麵湯頭是介於紅燒跟原汁牛肉麵之間，看起來很清澈，都能看到底下的麵條，但其實牛肉麵湯頭喝起來濃而不油膩，醬油味反而沒那麼多，也不會死鹹，算是蠻爽口的湯頭。牛肉是半筋半肉的，帶筋的部份吃起來是有Q度的，不會整塊都是軟的，不錯吃耶！', '2022-07-24 11:28:53', 150, '1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1658603624/Ramen/Taiwanese_Beef_Noodle_Soup_In_an_Instant_Pot_or_On_the_Stove_e9ded8.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659704762/Ramen/BeefNoodle_m8iszt.png', 'Main', '#670000', '食材：台灣本地牧場牛，麻辣醬，蔬菜高湯，台灣細麵條，小白菜，蔥，薑', 'Level5', 590, 875),
(28, '日本醬油醃白肉', '儘管如此，我們仍然需要對日本醬油醃白肉保持懷疑的態度。日本醬油醃白肉勢必能夠左右未來。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。日本醬油醃白肉，發生了會如何，不發生又會如何。若能夠洞悉日本醬油醃白肉各種層面的含義，勢必能讓思維再提高一個層級。', '2022-08-05 15:09:45', 60, NULL, 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659705224/Ramen/suannibairou_sjftqg.jpg', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659703110/Ramen/suannibairou_of8q5f.png', 'Sub', '#ffbb28', '食材： 台灣豬肉片，日本進口醬油膏，日本生抽，新鮮蒜泥', '', 325, 739);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spicylevel`
--

CREATE TABLE `spicylevel` (
  `SID` int(11) NOT NULL,
  `SpicyLevel` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spicylevel`
--

INSERT INTO `spicylevel` (`SID`, `SpicyLevel`, `Image`) VALUES
(1, 'Level1', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(2, 'Level2', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(3, 'Level2', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(4, 'Level3', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(5, 'Level3', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(6, 'Level3', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(7, 'Level4', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(8, 'Level4', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(9, 'Level4', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(10, 'Level4', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(12, 'Level5', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(13, 'Level5', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(14, 'Level5', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(15, 'Level5', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg'),
(16, 'Level5', 'https://res.cloudinary.com/dxbcg5dvk/image/upload/v1659702855/Ramen/ChiliIcon_ml6k6h.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`SID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`SID`),
  ADD UNIQUE KEY `Title` (`Title`) USING HASH;

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`SID`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`product_sid`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `spicylevel`
--
ALTER TABLE `spicylevel`
  ADD PRIMARY KEY (`SID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_list`
--
ALTER TABLE `order_list`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_detail`
--
ALTER TABLE `product_detail`
  MODIFY `product_sid` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `spicylevel`
--
ALTER TABLE `spicylevel`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
