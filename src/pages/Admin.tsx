import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import "bootstrap/dist/css/bootstrap.min.css";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  cidade: string;
}

export default function Admin() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cities } = (location.state || {}) as { cities: string[] };

  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    if (!cities){
        navigate('/login');
        return;
    }

    async function fetchLeads() {
      const q = query(collection(db, "leads"), where("cidade", "in", cities));
      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Lead[];
      setLeads(documents);
    }

    fetchLeads();
  }, [cities]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Leads</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-success">
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
