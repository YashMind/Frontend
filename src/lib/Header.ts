export default class Header {
  static title = "";

  static async setHeader(title: string) {
    const headerTitleElement =typeof window !== 'undefined' && document.getElementById('header-title');
        if (headerTitleElement) {
          headerTitleElement.innerHTML = title;
        }
  }

}