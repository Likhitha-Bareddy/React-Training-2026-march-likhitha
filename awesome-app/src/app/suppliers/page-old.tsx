'use client'
import { Supplier } from "@/models/Supplier";
import { useEffect, useState } from "react";

export default function SuppliersPage() {

    const [query, setQuery] = useState("");
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    async function fetchSuppliers(query?: string) {
        const response = await fetch("http://localhost:3000/api/suppliers?q=" + query);
        const suppliers = await response.json() as Supplier[];
        setSuppliers(suppliers);
    }

    useEffect(() => {
        fetchSuppliers("");
    }, []);


    async function handleSearch() {
        await fetchSuppliers(query);
    }

    async function handleReset() {
        setQuery("");
        fetchSuppliers("");
    }

    return (
        <div>
            <h4>Supplier Listings</h4>

            <div>
                <label htmlFor={query}>
        <b>Enter Search Term:</b>
      </label>&nbsp;
                <input style={{width: '500px'}} id="cs-query"
                    type="text"
                    placeholder="Search for..."
                    onChange={evt => setQuery(evt.target.value)}
                    value={query} // The input value is controlled by React state
                // The state is updated on each change
                />&nbsp;
                <button className="btn btn-primary" onClick={handleSearch} >Search</button>&nbsp;
                <button className="btn btn-secondary" onClick={handleReset}>Reset</button>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                        <tr key={supplier.id}>
                            <td>{supplier.id}</td>
                            <td>{supplier.name}</td>
                            <td>{supplier.contactPerson}</td>
                            <td>{supplier.email}</td>
                            <td>{supplier.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}