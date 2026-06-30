const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

const filesToUpdate = [
  {
    name: 'About.jsx',
    replace: [
      { from: "import { HiOutlineArrowLeft, HiOutlineUser, HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineMail, HiOutlineSparkles } from 'react-icons/hi';", to: "import { FiArrowLeft, FiUser, FiAward, FiMapPin, FiMail, FiStar } from 'react-icons/fi';" },
      { from: 'HiOutlineArrowLeft', to: 'FiArrowLeft' },
      { from: 'HiOutlineUser', to: 'FiUser' },
      { from: 'HiOutlineAcademicCap', to: 'FiAward' },
      { from: 'HiOutlineLocationMarker', to: 'FiMapPin' },
      { from: 'HiOutlineMail', to: 'FiMail' },
      { from: 'HiOutlineSparkles', to: 'FiStar' }
    ]
  },
  {
    name: 'Certificates.jsx',
    replace: [
      { from: "import { HiOutlineArrowLeft } from 'react-icons/hi';", to: "import { FiArrowLeft } from 'react-icons/fi';" },
      { from: 'HiOutlineArrowLeft', to: 'FiArrowLeft' }
    ]
  },
  {
    name: 'Contact.jsx',
    replace: [
      { from: "import { HiMenuAlt2, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';", to: "import { FiMenu, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';" },
      { from: 'HiMenuAlt2', to: 'FiMenu' },
      { from: 'HiOutlineMail', to: 'FiMail' },
      { from: 'HiOutlinePhone', to: 'FiPhone' },
      { from: 'HiOutlineLocationMarker', to: 'FiMapPin' }
    ]
  },
  {
    name: 'Home.jsx',
    replace: [
      { from: "import { HiMenuAlt2, HiOutlineCode, HiOutlineDesktopComputer, HiOutlineColorSwatch, HiOutlineLightBulb } from 'react-icons/hi';", to: "import { FiMenu, FiCode, FiMonitor, FiLayout, FiZap } from 'react-icons/fi';" },
      { from: 'HiMenuAlt2', to: 'FiMenu' },
      { from: 'HiOutlineCode', to: 'FiCode' },
      { from: 'HiOutlineDesktopComputer', to: 'FiMonitor' },
      { from: 'HiOutlineColorSwatch', to: 'FiLayout' },
      { from: 'HiOutlineLightBulb', to: 'FiZap' }
    ]
  },
  {
    name: 'Journey.jsx',
    replace: [
      { from: "import { HiOutlineArrowLeft } from 'react-icons/hi';", to: "import { FiArrowLeft } from 'react-icons/fi';" },
      { from: 'HiOutlineArrowLeft', to: 'FiArrowLeft' }
    ]
  },
  {
    name: 'ProjectDetails.jsx',
    replace: [
      { from: "import { HiOutlineArrowLeft, HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';", to: "import { FiArrowLeft, FiExternalLink, FiCode } from 'react-icons/fi';" },
      { from: 'HiOutlineArrowLeft', to: 'FiArrowLeft' },
      { from: 'HiOutlineExternalLink', to: 'FiExternalLink' },
      { from: 'HiOutlineCode', to: 'FiCode' }
    ]
  },
  {
    name: 'Projects.jsx',
    replace: [
      { from: "import { HiMenuAlt2 } from 'react-icons/hi';", to: "import { FiMenu } from 'react-icons/fi';" },
      { from: 'HiMenuAlt2', to: 'FiMenu' }
    ]
  }
];

filesToUpdate.forEach(fileDef => {
  const filePath = path.join(srcDir, fileDef.name);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    fileDef.replace.forEach(r => {
      content = content.replaceAll(r.from, r.to);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + fileDef.name);
  } else {
    console.log('Not found: ' + fileDef.name);
  }
});
