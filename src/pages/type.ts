export interface MyModal {
    isShow: false,
    onConfirm: () => {},
    onCancel: () => {}
}

export type OptionType = {
    value: string;
    label: string;
}
  

export interface Singer {
    _id?: string,
    singerName?: string,
    singerDescription?: string
    singerImg?: string
} 