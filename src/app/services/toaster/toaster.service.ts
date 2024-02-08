import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToasterService {

  private _TOASTERS: Array<ToasterNode> = [
    {
      type: MessageType.Error,
      message: 'An error occurred. Please try again later.'
    },
    {
      type: MessageType.Success,
      message: 'Operation successful!'
    },
    //....
    {
      type: MessageType.Unknown,
      message: 'Something went wrong!'
    }
  ]

  getToaster(messageType: MessageType) {
    for (let node of this._TOASTERS) {
      if (node.type === messageType)
        return node;
    }
    return this._TOASTERS[this._TOASTERS.length - 1];
  }

  constructor() { }

}


enum MessageType {
  Warning = 0,
  Error,
  Success,
  Unknown
}

interface ToasterNode {
  type: MessageType;
  message: string;
}