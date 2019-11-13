import fetch from 'isomorphic-unfetch'
import inBrowserEnv from "in-browser-env"

class DrupalAPI {
  private host: string = "http://dahcrosnza3qm.devcloud.acquia-sites.com/jsonapi"

  private performFetch = async (url: string) => {
    const res = await fetch(
      inBrowserEnv()
        ? `https://cors-anywhere.herokuapp.com/${url}`
        : url
    )
    const json = await res.json();

    return json
  }

  public getNode = async (nodetype: string, id?: string) => {
    let url: string = `${this.host}/node/${nodetype}`;
    url = id ? `${url}/${id}` : url;

    return await this.performFetch(url)
  }
}

export default DrupalAPI
