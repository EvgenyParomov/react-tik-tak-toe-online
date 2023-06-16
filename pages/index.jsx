import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/fields/ui-text-field";
import { UiSelectField } from "../components/uikit/fields/ui-select-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <UiSelectField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="Helper text"
        options={[
          { label: "Первый label", value: 1 },
          { label: "Второй label", value: 2 },
        ]}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
