import os

def install_utils(utils_option):
    utils_packages = {
        'a': 'htop',
        'b': 'curl',
        'c': 'vim',
        'd': 'micro'
        # Add more options as needed
    }
    if utils_option in utils_packages:
        os.system(f"sudo apt install {utils_packages[utils_option]}")
    else:
        print("Invalid option. Please select a valid option.")

def install_codecs(codecs_option):
    codecs_packages = {
        'a': 'ubuntu-restricted-extras',
        'b': 'ffmpeg'
        # Add more options as needed
    }
    if codecs_option in codecs_packages:
        os.system(f"sudo apt install {codecs_packages[codecs_option]}")
    else:
        print("Invalid option. Please select a valid option.")

def install_browsers(browsers_option):
    browsers_packages = {
        'a': 'chromium-browser',
        'b': 'brave-browser',
        'c': 'firefox'
        # Add more options as needed
    }
    if browsers_option in browsers_packages:
        os.system(f"sudo apt install {browsers_packages[browsers_option]}")
    else:
        print("Invalid option. Please select a valid option.")

def install_desktops(desktops_option):
    desktop_packages = {
        "a": "xfce4-session xfce4-goodies",                                 # XFCE4
        "b": "plasma-desktop",                                              # KDE PLASMA
        "c": "gnome-shell",                                                 # GNOME
        "d": "mate-desktop-environment-core mate-desktop-environment-extra",# MATE
        "e": "unity",                                                       # UNITY
        "f": "budgie-desktop"                                               # BUDGIE
    }
    if desktops_option in desktop_packages:
        os.system(f"sudo apt-get install {desktop_packages[desktops_option]}")
    else:
        print("Invalid option. Please select a valid option.")

def main():
    print("Menu:")
    print("Utils [u]")
    print("Codecs [c]")
    print("Browsers [b]")
    print("Desktop Environments [d]")
    print("INSTALLER BY ITSKORIN.ONLINE")

    option = input("Enter Option [u/c/b/d]: ").strip().lower()

    if option == 'u':
        print("Utils Menu:")
        print("a. Install htop - Interactive process viewer")
        print("b. Install curl - Command line tool for transferring data")
        print("c. Install vim - Highly configurable text editor")
        utils_option = input("Enter Option [a/b/c]: ").strip().lower()
        install_utils(utils_option)
    elif option == 'c':
        print("Codecs Menu:")
        print("a. Install ubuntu-restricted-extras - Commonly used multimedia codecs")
        print("b. Install ffmpeg - Multimedia framework")
        codecs_option = input("Enter Option [a/b]: ").strip().lower()
        install_codecs(codecs_option)
    elif option == 'b':
        print("Browsers Menu:")
        print("a. Install Chromium - Open-source web browser")
        print("b. Install Brave - Privacy-focused web browser")
        print("c. Install Firefox - Open-source web browser")
        browsers_option = input("Enter Option [a/b/c]: ").strip().lower()
        install_browsers(browsers_option)
    elif option == 'd':
        print("Desktop Environments Menu:")
        print("a. Install XFCE 4 Desktop")
        print("b. Install KDE PLASMA Desktop")
        print("c. Install GNOME Desktop")
        print("d. Install MATE Desktop")
        print("e. Install UNITY Desktop")
        print("f. Install BUDGIE Desktop")

        desktops_option = input("Enter Option [a/b/c/d/e/f]: ").strip().lower()
        install_desktops(desktops_option)
    else:
        print("Invalid option. Please select 'u', 'c', or 'b'.")

if __name__ == "__main__":
    main()
