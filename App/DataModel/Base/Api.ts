import fetch from 'isomorphic-unfetch'
import inBrowserEnv from "in-browser-env"

/**
 * Drupal API interactor. Use this to make calls to your drupal endpoint
 *
 * @class DrupalAPI
 */
class DrupalAPI {
  /**
   * Base URL for the endpoint
   *
   * @private
   * @type {string}
   * @memberof DrupalAPI
   */
  private host: string = "http://dahcrosnza3qm.devcloud.acquia-sites.com/jsonapi"

  /**
   * Fetches the data from the endpoint
   *
   * @param {string} url - Endpoint URL to fetch from
   * @returns {Promise<any>}
   * @private
   * @async
   * @memberof DrupalAPI
   */
  private performFetch = async (url: string): Promise<any> => {
    const res = await fetch(
      inBrowserEnv()
        ? `https://cors-anywhere.herokuapp.com/${url}`
        : url
    )
    const json = await res.json();

    return json
  }

  /**
   * Gets a specific node from the endpoint
   *
   * @param {string} nodetype - Type of node to fetch, eg: article
   * @param {string|undefined} id - Optional id, this is used to get a single record
   * @returns {Promise<any>}
   * @async
   * @memberof DrupalAPI
   */
  public getNode = async (nodetype: string, id?: string): Promise<any> => {
    let url: string = `${this.host}/node/${nodetype}`;
    url = id ? `${url}/${id}` : url;

    return await this.performFetch(url)
  }
}

export default DrupalAPI
