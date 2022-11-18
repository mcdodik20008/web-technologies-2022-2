if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran1',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT1',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Ulgran2',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT3',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT4',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }, {
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran3',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT5',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT6',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Добавил отсебятину',
                hasChildren: true,
                items: [
                    {
                        name: '7',
                        hasChildren: true,
                        items: [
                            {
                                name: '8',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: '9',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    }


    const items = new ListItems(document.getElementById('list-items'), data)


    items.render()
    items.init()

    function ListItems(el, data) {
        this.el = el;
        this.data = data;
        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]')
                if (open == null) {
                    return;
                }
                open.addEventListener('click', () => this.toggleItems(parent))
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {
            //проверка всех элементов на hasChildren
            //если hasChildren, то запускаем renderParent
            //если !hasChildren, то запускаем renderChildren
            //возвращает рендер родительского элемента
            console.log(data)
            let result = `
                    <div class="list-item" data-parent>
                        <div class="list-item__inner">
                            <img class="list-item__arrow" src="./img/chevron-down.png" alt="chevron-down" data-open>
                            <img class="list-item__folder" src="./img/folder.png" alt="folder">
                            <span>${data.name}</span>
                        </div>
                        <div class="list-item__items"> `
            if (data.hasChildren) {
                for (let i in data.items) {
                    result += this.renderParent(data.items[i])
                }
            }
            result += `</div>
                    </div>`
            return result
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }
    }
}
