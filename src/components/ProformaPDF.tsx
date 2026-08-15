import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Product } from "@/lib/db/products";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: "Helvetica", color: "#18181b", backgroundColor: "#ffffff" },
  header: { flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 2, borderBottomColor: "#10b981", paddingBottom: 15, marginBottom: 20 },
  companyTitle: { fontSize: 18, fontWeight: "bold", color: "#065f46" },
  subTitle: { fontSize: 8, color: "#71717a", marginTop: 2 },
  invoiceTitle: { fontSize: 16, fontWeight: "bold", textAlign: "right", color: "#0f172a" },
  invoiceMeta: { fontSize: 8, color: "#52525b", textAlign: "right", marginTop: 2 },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 10, fontWeight: "bold", color: "#0f172a", marginBottom: 6, textTransform: "uppercase" },
  gridTwo: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  box: { width: "48%", backgroundColor: "#f8fafc", padding: 10, borderRadius: 4, borderWidth: 1, borderColor: "#e2e8f0" },
  boxTitle: { fontSize: 9, fontWeight: "bold", color: "#334155", marginBottom: 4 },
  textSm: { fontSize: 8, color: "#475569", marginBottom: 2 },
  table: { marginTop: 10, borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 4 },
  tableHeader: { flexDirection: "row", backgroundColor: "#f1f5f9", borderBottomWidth: 1, borderBottomColor: "#cbd5e1", padding: 6, fontWeight: "bold" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#f1f5f9", padding: 6 },
  colDesc: { width: "55%" },
  colQty: { width: "15%", textAlign: "center" },
  colPrice: { width: "30%", textAlign: "right" },
  totalSection: { marginTop: 15, flexDirection: "row", justifyContent: "flex-end" },
  totalBox: { width: "40%", backgroundColor: "#ecfdf5", padding: 10, borderRadius: 4, borderWidth: 1, borderColor: "#a7f3d0" },
  totalRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 2 },
  totalGrand: { borderTopWidth: 1, borderTopColor: "#059669", paddingTop: 4, marginTop: 4, fontWeight: "bold" },
  footer: { position: "absolute", bottom: 30, left: 40, right: 40, borderTopWidth: 1, borderTopColor: "#e2e8f0", paddingTop: 10, textAlign: "center", fontSize: 7, color: "#9ca3af" }
});

interface ProformaProps {
  product: Product;
  customerName?: string;
  destinationPort?: string;
}

export function ProformaPDF({ product, customerName = "Valued East African Client", destinationPort = "Mombasa Port / Nairobi ICD" }: ProformaProps) {
  const quoteNumber = `CMH-QT-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const fobPrice = product.price_usd;
  const estimatedFreight = Math.round(fobPrice * 0.12);
  const totalCif = fobPrice + estimatedFreight;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.companyTitle}>CHINA MACHINERY HUB</Text>
            <Text style={styles.subTitle}>Direct Factory Import & Freight Logistics Partnership</Text>
            <Text style={styles.subTitle}>Henan / Shandong Export Hubs → East Africa</Text>
          </View>
          <View>
            <Text style={styles.invoiceTitle}>PROFORMA INVOICE</Text>
            <Text style={styles.invoiceMeta}>Ref: {quoteNumber}</Text>
            <Text style={styles.invoiceMeta}>Date: {dateStr}</Text>
            <Text style={styles.invoiceMeta}>Validity: 14 Days</Text>
          </View>
        </View>

        {/* Client & Supplier Info */}
        <View style={styles.gridTwo}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>ISSUED TO (BUYER):</Text>
            <Text style={styles.textSm}>Client: {customerName}</Text>
            <Text style={styles.textSm}>Destination: {destinationPort}</Text>
            <Text style={styles.textSm}>Region: East Africa (Kenya / Uganda / Tanzania)</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>SUPPLIER / EXPORTER:</Text>
            <Text style={styles.textSm}>China Machinery Hub Logistics Ltd</Text>
            <Text style={styles.textSm}>Origin Port: Qingdao / Shanghai, China</Text>
            <Text style={styles.textSm}>Payment Terms: Wire / LC / Local Escrow Partnership</Text>
          </View>
        </View>

        {/* Equipment Specification Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipment Specifications & Line Items</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.colDesc}>Item Description & Technical Specs</Text>
              <Text style={styles.colQty}>Qty</Text>
              <Text style={styles.colPrice}>Amount (USD)</Text>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.colDesc}>
                <Text style={{ fontWeight: "bold" }}>{product.name}</Text>
                <Text style={{ fontSize: 7, color: "#64748b", marginTop: 2 }}>Category: {product.category}</Text>
                <Text style={{ fontSize: 7, color: "#64748b" }}>Capacity: {product.capacity} | Power: {product.power_spec}</Text>
              </View>
              <Text style={styles.colQty}>1 Unit</Text>
              <Text style={styles.colPrice}>${fobPrice.toLocaleString()}.00</Text>
            </View>
          </View>
        </View>

        {/* Freight & Total Summary */}
        <View style={styles.totalSection}>
          <View style={styles.totalBox}>
            <View style={styles.totalRow}>
              <Text style={styles.textSm}>FOB Price (China Port):</Text>
              <Text style={styles.textSm}>${fobPrice.toLocaleString()}.00</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.textSm}>Est. Sea Freight & Ins.:</Text>
              <Text style={styles.textSm}>${estimatedFreight.toLocaleString()}.00</Text>
            </View>
            <View style={[styles.totalRow, styles.totalGrand]}>
              <Text style={{ fontWeight: "bold", fontSize: 9, color: "#065f46" }}>Est. CIF Total:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 9, color: "#065f46" }}>${totalCif.toLocaleString()}.00</Text>
            </View>
          </View>
        </View>

        {/* Footnote Notes */}
        <View style={[styles.section, { marginTop: 20 }]}>
          <Text style={styles.sectionTitle}>Import Notes & Next Steps</Text>
          <Text style={styles.textSm}>1. Prices are in USD and subject to factory component availability.</Text>
          <Text style={styles.textSm}>2. Estimated duty, IDF fee, and local clearance fees are payable to clearing agents upon vessel arrival.</Text>
          <Text style={styles.textSm}>3. Contact our WhatsApp verification team to lock in production slots and finalize shipping schedules.</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          China Machinery Hub • Official Proforma Quote • Generated via chinamachineryhub.com
        </Text>

      </Page>
    </Document>
  );
}