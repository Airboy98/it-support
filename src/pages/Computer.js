// import from ./components/Button
import Collapsible from "react-collapsible";
import "./styles.css";

export default function Computer() {
  return (
    <>
      <h1>Computer Troubleshooting</h1>
      <hr></hr>
      <Collapsible
        trigger={<button className="collapsible-trigger">Malware Removal</button>}
      >
        {/* <div className="collapsible-content"> */}
        <ul>
          <li>
            Click{" "}
            <a href="https://www.malwarebytes.com/mwb-download/thankyou">
              here
            </a>{" "}
            to download Malwarebytes (automatically detects Windows or Mac)
          </li>
          <li>
            Once downloaded (check Downloads folder), double click the MBSetup
            file (.exe for Windows and .dmg for Mac)
          </li>
          <li>
            Follow on screen prompts to install Malwarebytes (you may need to
            enable full access on MacOS or run as admin on Windows)
          </li>
          <li>Open Malwarebytes if it doesn't automatically open</li>
          <li>Click "Scan Now" button to scan your system for any malware</li>
          <li>Quarantine any detected files once the scan is complete</li>
        </ul>
        {/* </div> */}
      </Collapsible>
      <Collapsible
        trigger={<button className="collapsible-trigger">Photo Sharing</button>}
      >
        <div className="collapsible-content">
        <ul>
          <li>
            Login to <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">Google Drive</a> with your Google Account or create one if necessary
          </li>
          <li>
            Navigate to <b>My Drive</b> on the left side panel
          </li>
          <li>
            Open up Finder (macOS) or Windows Explorer (Windows) and find the photos you'd like to share
          </li>
          <li>Drag and drop the folder or picture files from Finder or Windows Explorer into <b>My Drive</b></li>
          <li>Right click the folder or picture files and hover over <b>Share</b> in the context menu</li>
          <li>Select <b>Copy Link</b> to copy the picture URL to share or select <b>Share</b> to choose an account to share to</li>
        </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Installing Apps (macOS)</button>
        }
      >
        <ul>
          <li>Navigate to the APP STORE that is logged in with your Apple ID</li>
          <li>Search for the desired app</li>
          <li>Select the app in the results and click Install</li>
        </ul>
        OR
        <ul>
          <li>Navigate to the website to find the desired app</li>
          <li>Once downloaded, click the .dmg installer on the desktop to install</li>
        </ul>
      </Collapsible>
      <Collapsible
        trigger={
          <button className="collapsible-trigger">Installing Programs (Windows)</button>
        }
      >
        <ul>
        <li>Navigate to the MICROSOFT STORE that is logged in with your Microsoft Account</li>
        <li>Search for the desired app</li>
        <li>Select the app in the results and click Install</li>
        </ul>
        OR
        <ul>
          <li>Navigate to the website to find the desired program</li>
          <li>Once downloaded, click the .exe installer to install</li>
        </ul>
      </Collapsible>
      <Collapsible trigger={
        <button className="collapsible-trigger">Thumb/Flash/Exernal Drives</button>
      }
      >
        <h3>Drive Formatting</h3>
      <ul>
        <li>Connect the drive via USB to your laptop/desktop computer</li>
        <li>In macOS, open <b>Disk Utility</b> or Windows, open <b>Windows Explorer</b></li>
        <li>Find the drive in the side panel on the left and select it</li>
        <li>Click the Format option and specify a format type</li>
        <li>NTFS (Windows), APFS (macOS), FAT32(4GB file size limit)/exFAT (cross platform)
        </li>
      </ul>
      </Collapsible>

      <Collapsible trigger={
      <button className="collapsible-trigger">Printers</button>
      }
      >
        <div className="printers">
        <ul>
          <li>
            <a href="https://www.brother-usa.com/home/printers-fax" target="_blank" rel="noopener noreferrer"><img src="./images/printers/brother.png" alt="Brother" width="100" height="50" /></a><br></br><a href="https://www.brother-usa.com/brother-support/" target="_blank" rel="noopener noreferrer">Support</a><a href="https://www.brother-usa.com/brother-support/driver-downloads" target="_blank" rel="noopener noreferrer">Drivers</a>
          </li>
          <li>
            <a href="https://www.hp.com/us-en/shop/cat/printers" target="_blank" rel="noopener noreferrer"><img src="./images/printers/hp.png" alt="HP" width="100" height="50" /></a><br></br><a href="https://support.hp.com/us-en/printer" target="_blank" rel="noopener noreferrer">Support</a><a href="https://support.hp.com/us-en/drivers" target="_blank" rel="noopener noreferrer">Drivers</a>
          </li>
          <li>
            <a href="https://epson.com/printers" target="_blank" rel="noopener noreferrer"><img src="./images/printers/epson.png" alt="Epson" width="100" height="50" /></a><br></br><a href="https://epson.com/Support/Printers/sh/s" target="_blank" rel="noopener noreferrer">Support</a><a href="https://download.ebz.epson.net/dsc/search/01/search/searchModule" target="_blank" rel="noopener noreferrer">Drivers</a>
          </li>
          <li>
            <a href="https://www.usa.canon.com/printers" target="_blank" rel="noopener noreferrer"><img src="./images/printers/canon.png" alt="Canon" width="100" height="50" /></a><br></br><a href="https://www.usa.canon.com/support" target="_blank" rel="noopener noreferrer">Support</a><a href="https://www.usa.canon.com/support/software-and-drivers" target="_blank" rel="noopener noreferrer">Drivers</a>
          </li>
        </ul>
        </div>
      </Collapsible>
    
    </>
  );
}
