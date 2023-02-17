import { useMemo, useState } from "react";

const data = Array(15).fill({
    imgSrc:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    name: "Jan Novak",
    location: "SK",
    web: "www.google.com",
    keywords: "Service, Farming, Hardware",
    vat: "NO",
    employees: 65,
});


const Table = ({ data }) => {
    return (
        <table className="tborder responsive-table highlight">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Web</th>
                    <th>Keywords</th>
                    <th>VAT</th>
                    <th>Employees</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {data.map((obj) => {
                    return (
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.location}</td>
                            <td>{obj.web}</td>
                            <td>{obj.keywords}</td>
                            <td>{obj.vat}</td>
                            <td>{obj.employees}</td>
                            <td>
                                <div>
                                    <i className="btn-action btn-flat waves-effect   material-icons">
                                        info_outline
                                    </i>

                                    <i className="btn-action btn-flat waves-effect material-icons">
                                        person_add
                                    </i>
                                    <i className="btn-action btn-flat waves-effect material-icons">
                                        add_shopping_cart
                                    </i>
                                    <i className="btn-action btn-flat waves-effect material-icons">
                                        add_location
                                    </i>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const List = ({ data }) => {
    return (
        <div className="listview">
            {data.map((obj) => {
                return (
                    <div className="card">
                        <div className="row  ">
                            <div className="col s2">
                                <img src={obj.imgSrc} alt={obj.name} />
                            </div>
                            <div className="col ">
                                <span className="card-title">{obj.name}</span>
                                <p>{obj.keywords}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Pagination = () => {
    return (
        <ul className="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

const TableList = () => {
    const [isListView, setListView] = useState(false)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const dataSlices = useMemo(() => {
        const sliceSize = itemsPerPage < 1 ? 1 : itemsPerPage
        const slicedArray = []
        for (let i = 0; i < data.length; i += sliceSize) {
            const sliced = data.slice(i, i + sliceSize)
            slicedArray.push(sliced)
        }
        return slicedArray
    }, [data, itemsPerPage])

    return (
        <div className="view-wrapper">
            <div className="switch">
                <label>
                    Table
                    <input type="checkbox" onClick={() => setListView(p => !p)} />
                    <span className="lever"></span>
                    List
                </label>
            </div>
            <br />

            {isListView ? (
                <List data={dataSlices[0]} />
            ) : (
                <Table data={dataSlices[0]} />
            )}

            <div className="view-paginator row valign-wrapper">
                <div className="input-field col s3  ">
                    <select
                        value={itemsPerPage}
                        onChange={({ currentTarget: { value } }) =>
                            setItemsPerPage(value)
                        }
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div className="col ml-auto ">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default TableList
