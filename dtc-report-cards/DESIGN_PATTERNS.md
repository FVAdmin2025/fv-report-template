# DTC Report Cards - Design Patterns

This document outlines the design patterns and component types implemented in the DTC Report Cards application. These patterns can be reused for consistent styling across future reports.

## Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Dark Teal | `#284341` | Main text color, table headers |
| Gold/Yellow | `#be9f54` | Metric bars, Medium complexity indicators |
| Light Green | `#b5caa2` | Component badges, callout backgrounds (at 40% opacity) |
| Off-White | `#f5f6f1` | Page background |
| Border Light | `#e5e7e3` | Card borders, table row borders |
| Success Green | `#22b686` | Positive indicators, "Low" complexity |
| Warning Yellow | `#f6c32c` | Medium indicators, modest impact values |
| Error Red | `#de4a4c` | Negative indicators, "High" complexity, low impact values |

## Card Types

### 1. Architecture Card

Used for displaying architectural approaches with metrics.

```tsx
<div className="bg-white border border-[#e5e7e3] rounded-sm overflow-hidden h-full">
  <div className="p-6 pb-4">
    <div className="bg-[#b5caa2]/30 text-[#284341] text-xs inline-block px-2 py-1 font-medium mb-3 rounded-sm">
      {percentage} // e.g., "27% of brands"
    </div>
    <h3 className="text-lg font-bold text-[#284341] mb-3">{title}</h3>
    <p className="text-[#284341] text-sm mb-6">{description}</p>

    <div className="mt-6">
      {/* Metric bars */}
    </div>
  </div>
</div>
```

### 2. Technology Component Card

Used for displaying technology components with adoption rates and top solutions.

```tsx
<div className="bg-white p-6 border border-[#e5e7e3] rounded-sm h-full">
  <h3 className="text-lg font-bold text-[#284341] mb-3">{title}</h3>
  <p className="text-[#284341] text-sm mb-5">{description}</p>

  <div className="flex flex-wrap gap-2 mb-5">
    <span className="bg-[#c0cfc6] text-[#284341] text-xs px-3 py-1 rounded-full">
      {adoptionRate} adoption
    </span>
    {/* Optional badges */}
  </div>

  <div>
    <div className="text-[#284341] text-sm font-bold mb-2">Top Solutions:</div>
    <ol className="text-[#284341] text-sm list-decimal pl-5 space-y-1">
      {/* Top solutions list */}
    </ol>
  </div>
</div>
```

### 3. Integration Table

Used for displaying integration approaches with color-coded indicators.

```tsx
<div className="bg-white border border-[#e5e7e3] rounded-sm overflow-hidden mb-12">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-[#284341] text-white">
        <th className="text-left p-4 font-medium border-b border-[#405754]">Column Title</th>
        <!-- Additional columns -->
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-[#e5e7e3]">
        <td className="p-4 font-medium">Row Label</td>
        <!-- Additional cells -->
        <td className="p-4 text-center">31%</td>
        <td className="p-4">
          <span className="inline-block bg-[#f6c32c] text-white text-xs font-bold px-3 py-1 rounded-full">+12%</span>
        </td>
      </tr>
      <!-- Additional rows -->
    </tbody>
  </table>
</div>
```

### 4. Key Finding Callout

Used for highlighting important insights.

```tsx
<div className="bg-[#b5caa2]/40 p-6 rounded-sm mb-12">
  <h3 className="text-xl font-bold text-[#284341] mb-3">Key Integration Finding</h3>
  <p className="text-[#284341] text-sm leading-relaxed">
    {content}
  </p>
</div>
```

### 5. Metric Bar

Used within Architecture Cards to display metric values.

```tsx
<div className="metric mb-6">
  <div className="flex justify-between text-sm mb-2">
    <span className="font-medium text-[#284341]">{label}</span>
    <span className="text-[#284341]">{value}</span>
  </div>
  <div className="bg-[#f7f7f7] h-2.5 rounded-none overflow-hidden w-full">
    <div
      className="bg-[#be9f54] h-full rounded-none"
      style={{ width: `${percentage}%` }}
    />
  </div>
</div>
```

## Section Layout

```tsx
<div className="bg-[#f5f6f1] min-h-screen">
  <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-[#284341]">Section Title</h2>
      <div className="text-sm text-[#284341]/70">
        From FunnelVision
      </div>
    </div>

    <h3 className="text-xl font-bold text-[#284341] mb-4">Subsection Title</h3>
    <p className="text-[#284341] mb-8">Description text...</p>

    {/* Component grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {/* Cards */}
    </div>

    {/* Additional content */}
  </div>
</div>
```

## Responsive Patterns

- Cards stack vertically on mobile (1 column)
- Medium screens: 2 columns
- Large screens: 3-4 columns depending on content
- Tables become horizontally scrollable on smaller screens
- Text sizes and spacing remain consistent across breakpoints

## Accessibility Considerations

- Text contrast maintains WCAG 2.0 AA standard (at least 4.5:1 ratio)
- Interactive elements have appropriate hover/focus states
- Semantic HTML used throughout components
- Tabular data uses proper table markup with appropriate headers
