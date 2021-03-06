import { IDisposable } from 'egret/base/common/lifecycle';

/**
 * ExmlView显示对象
 */
export interface IExmlView extends IDisposable {
	/**
	 * 核心容器
	 */
	readonly container: HTMLElement;
	/**
	 * 子视图
	 */
	readonly subview: IExmlView;
	/**
	 * 移除所有子集视图
	 */
	removeSubView(): void;
}

/**
 * ExmlView的容器
 */
export interface IExmlViewContainer {
	/**
	 * 添加一个ExmlView
	 * @param view 
	 */
	addExmlView(view: IExmlView): void;
	/**
	 * 移除ExmlView
	 * @param view 
	 */
	removeExmlView(view: IExmlView): void;
}

export interface ICodeView extends IDisposable {
	/**
	 * 核心容器
	 */
	readonly container: HTMLElement;
}

/**
 * CodeView的容器
 */
export interface ICodeViewContainer {
	/**
	 * 添加一个CodeView
	 * @param view 
	 */
	addCodeView(view: ICodeView): void;
	/**
	 * 移除CodeView
	 * @param view 
	 */
	removeCodeView(view: ICodeView): void;
}