import type { FormProps } from "element-plus"

/**
 * 表单底部相关的属性
 */
export interface IFormFooterProps {
  /**
   * 是否显示底部
   */
  show: boolean
  /**
   * 确认按钮的文案
   */
  okBtnText: string
  /**
   * 确认按钮的props, 来自各大ui库
   */
  okBtnProps: {
    [key: string]: any
  }
  /**
   * 取消按钮的文案
   */
  cancelBtnText: string
  /**
   * 取消按钮的属性
   */
  cancelBtnProps: {
    [key: string]: any
  },
  /**
   * 各大ui库attrs
   */
  formItemAttrs: {
    [key: string]: any
  }
}

export enum ELabelPosition {
  TOP = 'top',
  RIGHT = 'right',
  LEFT = 'left',
}

/**
 * form相关的属性
 */
export interface IFormProps extends FormProps {
  /**
   * form 一行几列
   */
  layoutColumn: number,
  /**
   * form inline模式开启后 一行多列失效
   */
  inline: boolean
  /**
   * form底部是否和表单一行
   */
  inlineFooter: boolean
  /**
   * label后缀
   */
  labelSuffix: ":"
  /**
   * label位置
   */
  labelPosition: ELabelPosition
  /**
   * 是否mini展示描述
   */
  isMiniDes: boolean,
  /**
   * 单选框必填，是否默认选中第一个
   */
  defaultSelectFirstOption: boolean
  [key: string]: any
}
