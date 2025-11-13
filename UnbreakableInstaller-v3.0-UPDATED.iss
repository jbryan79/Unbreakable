[Setup]
; Basic App Info
AppName=Unbreakable Password Generator
AppVersion=3.0
AppPublisher=James Bryan
AppPublisherURL=https://jamesabryan.com
AppSupportURL=https://github.com/jbryan79/Unbreakable
AppUpdatesURL=https://github.com/jbryan79/Unbreakable/releases
AppCopyright=Copyright (C) 2025 James Bryan

; Installation Directories
DefaultDirName={autopf}\Unbreakable
DefaultGroupName=Unbreakable Password Generator
OutputDir=C:\Users\james\Projects\Unbreakable
OutputBaseFilename=UnbreakableSetup-v3.0
SetupIconFile=C:\Users\james\Projects\Unbreakable\lock48.ico

; Installer Settings
Compression=lzma2/ultra64
SolidCompression=yes
ArchitecturesInstallIn64BitMode=x64

; Appearance
WizardStyle=modern
DisableProgramGroupPage=yes
DisableWelcomePage=no

; Privacy & Security
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog

; Uninstall
UninstallDisplayIcon={app}\lock48.ico
UninstallDisplayName=Unbreakable Password Generator

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Types]
Name: "full"; Description: "Full installation (Web App + Chrome Extension)"
Name: "webapp"; Description: "Web App Only"
Name: "extension"; Description: "Chrome Extension Only"
Name: "custom"; Description: "Custom installation"; Flags: iscustom

[Components]
Name: "webapp"; Description: "Unbreakable Web Application"; Types: full webapp custom; Flags: fixed
Name: "extension"; Description: "Chrome Extension Files"; Types: full extension custom
Name: "docs"; Description: "Documentation and Guides"; Types: full custom
Name: "shortcuts"; Description: "Desktop Shortcuts"; Types: full webapp custom

[Files]
; Web Application Files (always installed if webapp component selected)
Source: "C:\Users\james\Projects\Unbreakable\index.html"; DestDir: "{app}"; Components: webapp; Flags: ignoreversion
Source: "C:\Users\james\Projects\Unbreakable\lock48.ico"; DestDir: "{app}"; Components: webapp; Flags: ignoreversion

; Legacy files (if they exist - v2.0 compatibility)
Source: "C:\Users\james\Projects\Unbreakable\style.css"; DestDir: "{app}"; Components: webapp; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable\unbreakable.js"; DestDir: "{app}"; Components: webapp; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable\manifest.json"; DestDir: "{app}"; Components: webapp; Flags: ignoreversion skipifsourcedoesntexist

; Chrome Extension Files - UPDATED PATHS
; Main extension files
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\manifest.json"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\popup.html"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\popup.js"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\background.js"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\styles.css"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\style.css"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist

; Extension icons folder - includes all icons recursively
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\icons\*"; DestDir: "{app}\ChromeExtension\icons"; Components: extension; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist

; Any other extension files (adjust as needed based on your structure)
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\*.html"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\*.js"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable-Web-Extention\*.css"; DestDir: "{app}\ChromeExtension"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist

; Documentation
Source: "C:\Users\james\Projects\Unbreakable\README.md"; DestDir: "{app}"; Components: docs; Flags: ignoreversion skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable\README.txt"; DestDir: "{app}"; Components: docs; Flags: ignoreversion isreadme skipifsourcedoesntexist
Source: "C:\Users\james\Projects\Unbreakable\LICENSE"; DestDir: "{app}"; Components: docs; Flags: ignoreversion skipifsourcedoesntexist

; Extension Loading Instructions
Source: "C:\Users\james\Projects\Unbreakable\extension-guide.html"; DestDir: "{app}"; Components: extension; Flags: ignoreversion skipifsourcedoesntexist

[Icons]
; Start Menu - Web App
Name: "{group}\Unbreakable Password Generator"; Filename: "{app}\index.html"; IconFilename: "{app}\lock48.ico"; Comment: "100% Offline Password Generator"; Components: webapp
Name: "{group}\Extension Loading Guide"; Filename: "{app}\extension-guide.html"; IconFilename: "{sys}\shell32.dll"; IconIndex: 70; Comment: "How to install the Chrome Extension"; Components: extension
Name: "{group}\Extension Folder"; Filename: "{app}\ChromeExtension"; IconFilename: "{sys}\shell32.dll"; IconIndex: 3; Comment: "Chrome Extension Files"; Components: extension
Name: "{group}\README"; Filename: "{app}\README.md"; IconFilename: "{sys}\shell32.dll"; IconIndex: 70; Comment: "Read documentation"; Components: docs
Name: "{group}\Uninstall Unbreakable"; Filename: "{uninstallexe}"; Comment: "Uninstall Unbreakable Password Generator"

; Desktop Icons
Name: "{commondesktop}\Unbreakable"; Filename: "{app}\index.html"; IconFilename: "{app}\lock48.ico"; Comment: "100% Offline Password Generator"; Components: webapp and shortcuts
Name: "{commondesktop}\Load Chrome Extension"; Filename: "{app}\extension-guide.html"; IconFilename: "{sys}\shell32.dll"; IconIndex: 70; Comment: "Install Unbreakable Chrome Extension"; Components: extension and shortcuts

[Tasks]
Name: "desktopicon"; Description: "Create &desktop shortcuts"; GroupDescription: "Additional shortcuts:"; Components: shortcuts

[Run]
; Ask user what they want to launch after installation
Filename: "{app}\index.html"; Description: "Launch Unbreakable Web App"; Flags: nowait postinstall skipifsilent shellexec unchecked; Components: webapp
Filename: "{app}\extension-guide.html"; Description: "View Extension Loading Guide"; Flags: nowait postinstall skipifsilent shellexec; Components: extension

[Messages]
WelcomeLabel2=This will install [name/ver] on your computer.%n%nUnbreakable provides TWO ways to generate secure passwords:%n%n1. Web Application - Use directly in your browser%n2. Chrome Extension - Quick access from any page%n%nBoth are 100%% offline and make ZERO network requests.%n%nYour passwords are generated on YOUR device and stay on YOUR device.%n%nNo servers. No logging. No trust required.
FinishedHeadingLabel=Installation Complete!
FinishedLabelNoIcons=Unbreakable has been installed successfully.%n%nIf you installed the Chrome Extension, please click "View Extension Loading Guide" to learn how to load it into Chrome.

[Code]
procedure CurStepChanged(CurStep: TSetupStep);
var
  MsgText: String;
begin
  if CurStep = ssPostInstall then
  begin
    // Build custom message based on installed components
    MsgText := 'Installation Complete!' + #13#10 + #13#10;
    
    if WizardIsComponentSelected('webapp') then
      MsgText := MsgText + '✓ Web Application installed' + #13#10;
    
    if WizardIsComponentSelected('extension') then
    begin
      MsgText := MsgText + '✓ Chrome Extension files installed' + #13#10 + #13#10;
      MsgText := MsgText + 'IMPORTANT: Chrome extensions cannot be auto-installed.' + #13#10;
      MsgText := MsgText + 'Please open the Extension Loading Guide to complete installation.' + #13#10 + #13#10;
    end;
    
    MsgText := MsgText + #13#10 + 'Privacy Promise:' + #13#10;
    MsgText := MsgText + '✓ No servers - we don''t have any' + #13#10;
    MsgText := MsgText + '✓ No logging - nothing is saved' + #13#10;
    MsgText := MsgText + '✓ No network requests - provably offline' + #13#10;
    MsgText := MsgText + '✓ No data collection - we don''t know you exist' + #13#10 + #13#10;
    MsgText := MsgText + 'Your passwords never leave your device. Period.';
    
    MsgBox(MsgText, mbInformation, MB_OK);
  end;
end;
